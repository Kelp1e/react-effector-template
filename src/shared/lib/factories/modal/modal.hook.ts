import { useUnit } from "effector-react"

import { createModal } from "~/shared/lib"

export const useModal = (props: ReturnType<typeof createModal>) => {
  const [isOpen, open, close] = useUnit([
    props.$isOpen,
    props.open,
    props.close,
  ])

  return {
    isOpen,
    open,
    close,
  }
}
