(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [dgn.room-test] [dgn.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote dgn.room-test) (quote dgn.core-test))