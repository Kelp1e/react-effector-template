import { createEvent, createStore, sample } from "effector"

export const createModal = () => {
  const open = createEvent<void>()
  const close = createEvent<void>()

  const opened = createEvent<void>()
  const closed = createEvent<void>()

  const $isOpen = createStore<boolean>(false)

  sample({
    clock: open,
    fn: () => true,
    target: $isOpen,
  })

  sample({
    clock: close,
    fn: () => false,
    target: $isOpen,
  })

  sample({
    clock: $isOpen,
    filter: (isOpen) => isOpen,
    target: opened,
  })

  sample({
    clock: $isOpen,
    filter: (isOpen) => !isOpen,
    target: closed,
  })

  return {
    open,
    close,
    opened,
    closed,
    $isOpen,
  }
}
