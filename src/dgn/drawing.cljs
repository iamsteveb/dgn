(ns dgn.drawing
  (:require [dgn.rect :as rect]))

(defn rect [context {:keys [stroke-style fill-style]} {:keys [w h] :as r1}]
  (let [{{:keys [x y]} :top-left} (rect/corners r1)]
    (.beginPath context)
    (when stroke-style (set! (.-strokeStyle context) stroke-style))
    (when fill-style (set! (.-fillStyle context) fill-style))
    (.rect context x y w h)
    (when stroke-style (.stroke context))
    (when fill-style (.fill context))
    (.closePath context)))