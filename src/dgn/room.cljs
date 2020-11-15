(ns dgn.room
  (:require [dgn.vector :as v]
            [dgn.drawing :as drawing]))

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

(defn dist [r1 r2]
  (v/length (v/- r1 r2)))

(defn impact-of [r1 r2]
  (if (= 0 (dist r1 r2))
    {:x 0 :y 0}
    (v/normalise (v/- r1 r2))))

(defn draw [context {:keys [x y] :as dimensions}]
  (drawing/rect context
                {:stroke-style "rgb(0,255,0)"
                 :fill-style   "rgba(0,255,0,0.25)"}
                dimensions)
  (drawing/rect context
                {:fill-style "rgb(255,255,255)"}
                {:x x :y y :w 10 :h 10}))