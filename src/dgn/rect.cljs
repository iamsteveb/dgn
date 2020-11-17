(ns dgn.rect)

(defn corners [{:keys [x y w h]}]
  (let [hw (/ w 2)
        hh (/ h 2)]
    {:top-left     {:x (- x hw) :y (- y hh)}
     :bottom-right {:x (+ x hw) :y (+ y hh)}}))

(defn intersect [a b]
  (let [disjoint #(or (< (-> %1 :bottom-right :x) (-> %2 :top-left :x)) ; a left of b
                      (< (-> %1 :bottom-right :y) (-> %2 :top-left :y)))] ; a above b
    (not (or (disjoint (corners a) (corners b))
             (disjoint (corners b) (corners a))))))

(defn overlap [r1 r2 axis]
  (let [{r1-tl :top-left r1-br :bottom-right} (corners r1)
        {r2-tl :top-left r2-br :bottom-right} (corners r2)
        origin (max (axis r1-tl) (axis r2-tl))
        length (- (min (axis r1-br) (axis r2-br)) origin)]
    {axis origin
     ({:x :w :y :h} axis) length}))