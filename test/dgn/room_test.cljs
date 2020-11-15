(ns dgn.room-test
  (:require [cljs.test :refer-macros [deftest is are testing]]
            [dgn.room :as room]))

(deftest create-level

  (testing "number of rooms in level"
    (let [room-count (+ 5 (rand-int 10))
          context    {:width 400 :height 300}]
      (is (= room-count (count (room/create-level context room-count))))))

  (testing "room spec"
    (let [context {:width 4 :height 4}
          room    (first (room/create-level context 1))]
      (is (#{1 2} (:x room)))
      (is (#{1 2} (:y room)))))
  )

(defn roughly= [a b d]
  (< (Math/abs (- a b)) d))

(defn position-roughly= [{x1 :x y1 :y :as a } {x2 :x y2 :y :as b} d]
  (and (roughly= x1 x2 d)
       (roughly= y1 y2 d)))

(deftest separation

  (let [r1 {:x 100 :y 100 :w 5 :h 5}
        r2 {:x 101 :y 101 :w 5 :h 5}]

    (is (roughly= 1.414 (room/dist r1 r2) 0.05))

    (is (position-roughly= {:x -0.707 :y -0.707} (room/impact-of r1 r2) 0.05))))