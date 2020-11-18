(ns dgn.room
  (:require [dgn.vector :as v]
            [dgn.drawing :as drawing]
            [dgn.rect :as rect]
            [medley.core :as medley]))

(defn rand-between [lower upper]
  (+ lower (rand-int (- upper lower))))

(defn create-room [id {:keys [width height]}]
  (let [margin-ratio  4
        width-margin  (quot width margin-ratio)
        height-margin (quot height margin-ratio)]
    {:x  (rand-between width-margin (- width width-margin))
     :y  (rand-between height-margin (- height height-margin))
     :h  (rand-between (quot height 20) (quot height 10))
     :w  (rand-between (quot width 20) (quot width 10))
     :id id}))

(defn create-level [context nbr-of-rooms]
  (map #(create-room % context) (range nbr-of-rooms)))

(defn center [r]
  (select-keys r [:x :y]))

(defn dist [r1 r2]
  (->> [r1 r2]
       (map center)
       (apply v/-)
       v/length))

(defn impact-of [r1 r2]
  (if (= 0 (dist r1 r2))
    {:x 0 :y 0}
    (->> [r1 r2]
         (map center)
         (apply v/-)
         v/normalise)))

(defn draw [context {:keys [x y id] :as dimensions}]
  (drawing/rect context
                {:stroke-style "rgb(0,255,0)"
                 :fill-style   "rgba(0,255,0,0.25)"}
                dimensions)
  (set! (.-textBaseline context) "middle")
  (set! (.-textAlign context) "center")
  (set! (.-strokeStyle context) "rgb(255,255,255)")
  (.strokeText context id x y)
  )

(defn draw-all [context rooms]
  (doseq [room rooms]
    (draw context room)))

(defn make [x y w h]
  {:x x :y y :w w :h h})

(defn intersectors [room others]
  (filter #(and (not= room %1)
                (rect/intersect room %1))
          others))

(defn combined-impact-of [r1 rooms]
  (let [i (intersectors r1 rooms)]
    (v// (->> i
              (map #(impact-of r1 %))
              (apply v/+))
         (count i))))

(defn move-away-from-all [r1 rooms]
  (->> rooms
       (combined-impact-of r1)
       ;(medley/map-vals #(int (if (> % 0) (Math/ceil %) (Math/floor %))))
       (v/+ r1)
       (merge r1)))

(defn adjust-all [rooms]
  (reduce #(update %1 %2 move-away-from-all %1) (vec rooms) (-> rooms count range)))

(defn adjacent-edge [r1 r2]
  (let [{br1 :bottom-right} (rect/corners r1)
        {tl2 :top-left} (rect/corners r2)]
    (cond
      (<= 0 (- (:y tl2) (:y br1)) 2) :south
      (<= 0 (- (:x tl2) (:x br1)) 2) :east
      :else nil)))

(defn generate-doors [r1 rooms]
  (letfn [(with-adjacent-edge [r2]
            [r2 (adjacent-edge r1 r2)])

          (with-overlap [[r2 rel :as t]]
            (condp = rel
              :south (conj t (rect/overlap r1 r2 :x))
              :east (conj t (rect/overlap r1 r2 :y))))

          (overlap-sufficient? [[_ _ {:keys [w h]}]] (cond
                                                       w (>= w 6)
                                                       h (>= h 6)))

          (make-door [[r2 edge {:keys [x w y h]}]]
            (cond-> {:h 6 :w 6 :path [edge r1 r2]}
                    (= edge :south) (merge {:x (+ x (quot w 2))
                                            :y (+ (:y r1) (quot (:h r1) 2))})
                    (= edge :east) (merge {:x (+ (:x r1) (quot (:w r1) 2))
                                           :y (+ y (quot h 2))})))]
    (->> rooms
         (map #(with-adjacent-edge %))
         (remove (fn [[_ edge]] (nil? edge)))
         (map #(with-overlap %))
         (filter overlap-sufficient?)
         (map make-door))))