import { createEvent, createStore, sample } from "effector"

export const createValue = <T>(value: T) => {
  const change = createEvent<T>()

  const changed = createEvent<T>()

  const $value = createStore<T>(value)

  sample({
    clock: change,
    target: $value,
  })

  sample({
    clock: $value,
    target: changed,
  })

  return {
    change,
    changed,
    $value,
  }
}
