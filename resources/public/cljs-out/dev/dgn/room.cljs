(ns dgn.room)

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

(defn rect [context {:keys [stroke-style fill-style]} {:keys [x y w h]}]
  (.beginPath context)
  (when stroke-style (set! (.-strokeStyle context) stroke-style))
  (when fill-style (set! (.-fillStyle context) fill-style))
  (.rect context (- x (quot w 2)) (- y (quot h 2)) w h)
  (when stroke-style (.stroke context))
  (when fill-style (.fill context))
  (.closePath context))

(defn draw [context {:keys [x y] :as dimensions}]
  (rect context
        {:stroke-style "rgb(0,255,0)"
         :fill-style   "rgba(0,255,0,0.25)"}
        dimensions)
  (rect context
        {:fill-style   "rgb(255,255,255)"}
        {:x x :y y :w 10 :h 10})
  )