(ns dgn.rect-test
  (:require [cljs.test :refer-macros [deftest is testing are]]
            [dgn.rect :as rect]))

(defn check-corners [room a b c d]
  (let [{:keys [top-left bottom-right]} (rect/corners room)]
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

      (is (rect/intersect room-1 room-2))
      (are [a b] (not (rect/intersect a b))
                 room-1 room-3
                 room-1 room-4)))

  (testing "intersecting rooms - odd size"
    (let [room-1 {:x 100 :y 100 :w 5 :h 5}
          room-2 {:x 105 :y 105 :w 5 :h 5}]
      (check-corners room-1 97.5 97.5 102.5 102.5)
      (check-corners room-2 102.5 102.5 107.5 107.5)
      (is (rect/intersect room-1 room-2)))))

(deftest overlap
  ; ----
  ;  --
  (is (= {:x 100, :w 10} (rect/overlap {:x 100 :w 20} {:x 105 :w 10} :x)))
  (is (= {:x 100, :w 10} (rect/overlap {:x 105 :w 10} {:x 100 :w 20} :x)))
  ; ----
  ;   ----
  (is (= {:x 100, :w 10} (rect/overlap {:x 100 :w 20} {:x 110 :w 20} :x)))
  (is (= {:x 100, :w 10} (rect/overlap {:x 110 :w 20} {:x 100 :w 20} :x)))

  ;    --
  ; --
  (is (= {:x 90, :w -10} (rect/overlap {:x 100 :w 20} {:x 70 :w 20} :x)))
  (is (= {:x 90, :w -10} (rect/overlap {:x 70 :w 20} {:x 100 :w 20} :x)))
  ; --
  ;    --
  (is (= {:x 120, :w -10} (rect/overlap {:x 100 :w 20} {:x 130 :w 20} :x)))
  (is (= {:x 120, :w -10} (rect/overlap {:x 130 :w 20} {:x 100 :w 20} :x))))