(ns dgn.room
  (:require [dgn.vector :as v]))

(defn rand-between [lower upper]
  (+ lower (rand-int (- upper lower))))

(defn create-room [{:keys [width height]}]
  (let [margin-ratio  4
        width-margin  (quot width margin-ratio)
        height-margin (quot height margin-ratio)]
    {:x (rand-between width-margin (- width width-margin))
     :y (rand-between height-margin (- height height-margin))
     :h (rand-between (quot height 20) (quot height 10))
     :w (rand-between (quot width 20) (quot width 10))}))

(defn create-level [context nbr-of-rooms]
  (repeatedly nbr-of-rooms #(create-room context)))

(defn corners [{:keys [x y w h]}]
  (let [hw (/ w 2)
        hh (/ h 2)]
    {:top-left     {:x (- x hw) :y (- y hh)}
     :bottom-right {:x (+ x hw) :y (+ y hh)}}))

(defn center [r]
  r)

(defn intersect [a b]
  (let [disjoint #(or (< (-> %1 :bottom-right :x) (-> %2 :top-left :x)) ; a left of b
                      (< (-> %1 :bottom-right :y) (-> %2 :top-left :y)))] ; a above b
    (not (or (disjoint (corners a) (corners b))
             (disjoint (corners b) (corners a)))))
  )

(defn dist [r1 r2]
  (v/length (v/- r1 r2)))

(defn impact-of [r1 r2]
  (if (= 0 (dist r1 r2))
    {:x 0 :y 0}
    (v/normalise (v/- r1 r2))))

(defn rect [context {:keys [stroke-style fill-style]} {:keys [w h] :as r1}]
  (let [{{:keys [x y]} :top-left} (corners r1)]
    (.beginPath context)
    (when stroke-style (set! (.-strokeStyle context) stroke-style))
    (when fill-style (set! (.-fillStyle context) fill-style))
    (.rect context x y w h)
    (when stroke-style (.stroke context))
    (when fill-style (.fill context))
    (.closePath context)))

(defn draw [context {:keys [x y] :as dimensions}]
  (rect context
        {:stroke-style "rgb(0,255,0)"
         :fill-style   "rgba(0,255,0,0.25)"}
        dimensions)
  (rect context
        {:fill-style "rgb(255,255,255)"}
        {:x x :y y :w 10 :h 10}))