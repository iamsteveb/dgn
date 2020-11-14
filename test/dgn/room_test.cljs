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

(defn check-corners [room a b c d]
  (let [{:keys [top-left bottom-right]} (room/corners room)]
    (are [x y] (= x y)
               (:x top-left) a
               (:y top-left) b
               (:x bottom-right) c
               (:y bottom-right) d)))

(deftest intersect
  (testing "intersecting rooms"
    (let [room-1 {:x 100 :y 100 :w 20 :h 20}
          room-2 {:x 120 :y 100 :w 20 :h 20}
          room-3 {:x 120.01 :y 110 :w 20 :h 20}
          room-4 {:x 120 :y 100 :w 19.99 :h 19.99}]

      (check-corners room-1 90 90 110 110)
      (check-corners room-2 110 90 130 110)

      (is (room/intersect room-1 room-2))
      (are [a b] (not (room/intersect a b))
                 room-1 room-3
                 room-1 room-4)))

  (testing "intersecting rooms - odd size"
    (let [room-1 {:x 100 :y 100 :w 5 :h 5}
          room-2 {:x 105 :y 105 :w 5 :h 5}]
      (check-corners room-1 97.5 97.5 102.5 102.5)
      (check-corners room-2 102.5 102.5 107.5 107.5)
      (is (room/intersect room-1 room-2)))))

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