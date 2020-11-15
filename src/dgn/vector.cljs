(ns dgn.vector
  (:refer-clojure :exclude [- /])
  (:require [medley.core :as m]))

(defn - [& vs]
  (apply m/map-vals (fn [& ds] (apply clojure.core/- ds)) vs))

(defn / [v d]
  (m/map-vals #(clojure.core// % d) v))

(defn length [v]
  (->> v
       vals
       (map #(Math/pow % 2))
       (apply +)
       Math/sqrt))

(defn normalise [v]
  (/ v (length v)))