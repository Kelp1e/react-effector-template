import { createValue } from "~/shared/lib"

export const createTab = <T extends string>(tab: T) => {
  const $tab = createValue<T>(tab)

  return {
    change: $tab.change,
    changed: $tab.changed,
    $value: $tab.$value,
  }
}
