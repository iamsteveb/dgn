(ns dgn.vector-test
  (:require [cljs.test :refer-macros [deftest is are testing]]
            [dgn.vector :as v]))

(deftest vector-test

  (is (= {:x 5 :y 6} (v/- {:x 8 :y 7} {:x 3 :y 1})))

  (is (= 5 (v/length {:x 3 :y 4})))

  (is (= {:x 0.6 :y 0.8} (v/normalise {:x 3 :y 4})))

  (is (= 1 (-> {:x 23 :y 67} v/normalise v/length))))