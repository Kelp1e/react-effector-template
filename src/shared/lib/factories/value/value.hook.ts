import { useUnit } from "effector-react"

import { createValue } from "~/shared/lib"

export const useValue = <T>(props: ReturnType<typeof createValue<T>>) => {
  const [value, change] = useUnit([props.$value, props.change])

  return {
    value,
    change,
  }
}
