(ns ^:figwheel-hooks dgn.core
  (:require
   [goog.dom :as gdom]
   [dgn.room :as room]))

(println "This text is printed from src/dgn/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

;; define your app data so that it doesn't get over-written on reload
(def context {:width 900 :height 600})
(def app-state (atom (room/create-level context 20)))

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (let [canvas (gdom/getElement "dgc")
        ctx    (.getContext canvas "2d")]
    (.beginPath ctx)
    (set! (.-fillStyle ctx) "rgb(0,0,0)")
    (.rect ctx 0 0 900 600)
    (.fill ctx)
    (.closePath ctx)
    (doseq [room @app-state]
      (println room)
      (room/draw ctx room)))
  )
