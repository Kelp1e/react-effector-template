import { createEvent, createStore, sample } from "effector"

const incremented = createEvent<void>()
const decremented = createEvent<void>()

const $counter = createStore<number>(0)

sample({
  clock: incremented,
  source: $counter,
  fn: (counter) => counter + 1,
  target: $counter,
})

sample({
  clock: decremented,
  source: $counter,
  fn: (counter) => counter - 1,
  target: $counter,
})

export const homeModel = {
  incremented,
  decremented,
  $counter,
}
