(ns ^:figwheel-hooks dgn.core
  (:require
    [goog.dom :as gdom]
    [dgn.room :as room]
    [dgn.drawing :as drawing]))

(println "This text is printed from src/dgn/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

;; define your app data so that it doesn't get over-written on reload
(def context {:width 900 :height 600})
(def app-state (atom (room/create-level context 30)))

(defn clear-canvas [ctx]
  (drawing/rect ctx
                {:fill-style "rgb(0,0,0)"}
                {:x 450 :y 300 :w 900 :h 600}))

(defn draw-all []
  (let [canvas (gdom/getElement "dgc")
        ctx    (.getContext canvas "2d")]
    (clear-canvas ctx)
    (room/draw-all ctx @app-state)))

(defn draw-doors []
  (let [canvas (gdom/getElement "dgc")
        ctx    (.getContext canvas "2d")]
    (doseq [r @app-state]
      (doseq [d (room/generate-doors r @app-state)]
        (drawing/rect ctx
                      {:fill-style "rgb(255,255,255)"}
                      d)))))

(defonce interval (atom 0))

(defn animate-separation []
  (let [old-rooms @app-state]
    (swap! app-state room/adjust-all)
    (draw-all)
    (when (= old-rooms @app-state)
      (js/clearInterval @interval)
      (draw-doors)))
  )

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (draw-all)
  )

(on-reload)

(reset! interval (js/setInterval animate-separation 100))