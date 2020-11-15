(ns dgn.vector
  (:refer-clojure :exclude [-]))

(defn - [{x1 :x y1 :y} {x2 :x y2 :y}]
  {:x (clojure.core/- x1 x2) :y (clojure.core/- y1 y2)})

(defn length [{:keys [x y]}]
  (Math/sqrt (+ (Math/pow x 2)
                (Math/pow y 2))))

(defn normalise [{:keys [x y] :as v}]
  (let [l (length v)]
    {:x (/ x l) :y (/ y l)}))