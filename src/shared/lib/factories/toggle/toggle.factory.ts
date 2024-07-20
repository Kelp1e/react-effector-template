import { createEvent, createStore, sample } from "effector"
import { not } from "patronum"

export const createToggle = (value: boolean = false) => {
  const toggle = createEvent<void>()

  const toggled = createEvent<boolean>()

  const $value = createStore<boolean>(value)

  sample({
    clock: toggle,
    source: not($value),
    target: $value,
  })

  sample({
    clock: toggle,
    source: $value,
    target: toggled,
  })

  return {
    toggle,
    toggled,
    $value,
  }
}
