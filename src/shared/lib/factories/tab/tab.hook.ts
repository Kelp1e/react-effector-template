import { useUnit } from "effector-react"

import { createTab } from "~/shared/lib"

export const useTab = <T extends string>(
  props: ReturnType<typeof createTab<T>>
) => {
  const [value, change] = useUnit([props.$value, props.change])

  return {
    value,
    change,
  }
}
