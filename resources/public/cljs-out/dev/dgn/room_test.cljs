(ns dgn.room-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [dgn.room :as room]))

(deftest create-level

  (testing "number of rooms in level"
    (let [room-count (+ 5 (rand-int 10))
          context    {:width 400 :height 300}]
      (is (= room-count (count (room/create-level context room-count))))))

  (testing "room spec"
    (let [context    {:width 4 :height 4}
          room (first (room/create-level context 1))]
      (is (#{1 2} (:x room)))
      (is (#{1 2} (:y room)))))
  )
