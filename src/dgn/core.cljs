(ns ^:figwheel-hooks dgn.core
  (:require
    [goog.dom :as gdom]
    [dgn.room :as room]
    [dgn.drawing :as drawing]))

(println "This text is printed from src/dgn/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

;; define your app data so that it doesn't get over-written on reload
(def context {:width 900 :height 600})
(def app-state (atom (room/create-level context 50)))

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (let [canvas (gdom/getElement "dgc")
        ctx    (.getContext canvas "2d")]
    (drawing/rect ctx
                  {:fill-style "rgb(0,0,0)"}
                  {:x 0 :y 0 :w 900 :h 600})
    (doseq [room @app-state]
      (println room)
      (room/draw ctx room))
    )
  )
