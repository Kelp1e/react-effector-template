import { useUnit } from "effector-react"

import { createToggle } from "~/shared/lib"

export const useToggle = (props: ReturnType<typeof createToggle>) => {
  const [value, toggle] = useUnit([props.$value, props.toggle])

  return {
    value,
    toggle,
  }
}
