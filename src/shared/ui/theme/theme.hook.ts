import { useUnit } from "effector-react"

import { themeModel } from "~/shared/ui"

export const useTheme = () => {
  const [theme, preference, setTheme, setPreference] = useUnit([
    themeModel.$theme,
    themeModel.$preference,
    themeModel.themeChanged,
    themeModel.preferenceChanged,
  ])

  return { theme, preference, setTheme, setPreference }
}
