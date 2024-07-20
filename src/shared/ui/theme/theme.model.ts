import { createEvent, createStore, sample } from "effector"
import { persist } from "effector-storage/local"

import { appStarted } from "~/shared/config/init"
import { Preference, Theme } from "~/shared/ui"

import { DEFAULT_PREFERENCE, DEFAULT_THEME } from "./theme.config"
import { changeThemeFx, getSystemTheme } from "./theme.lib"

export const themeModel = {
  themeChanged: createEvent<Theme>(),
  preferenceChanged: createEvent<Preference>(),

  $theme: createStore<Theme>(DEFAULT_THEME),
  $preference: createStore<Preference>(DEFAULT_PREFERENCE),
}

persist({ store: themeModel.$theme, key: "theme" })
persist({ store: themeModel.$preference, key: "themePreference" })

sample({
  clock: appStarted,
  source: { theme: themeModel.$theme, preference: themeModel.$preference },
  filter: (source) => source.preference === "personal",
  fn: (source): Theme => source.theme,
  target: changeThemeFx,
})

sample({
  clock: appStarted,
  source: { theme: themeModel.$theme, preference: themeModel.$preference },
  filter: (source) => source.preference === "system",
  fn: getSystemTheme,
  target: changeThemeFx,
})

sample({
  clock: themeModel.themeChanged,
  fn: (): Preference => "personal",
  target: themeModel.$preference,
})

sample({
  clock: themeModel.themeChanged,
  target: [themeModel.$theme, changeThemeFx],
})

sample({
  clock: themeModel.preferenceChanged,
  target: themeModel.$preference,
})

sample({
  clock: themeModel.preferenceChanged,
  fn: getSystemTheme,
  target: [themeModel.$theme, changeThemeFx],
})

sample({
  clock: changeThemeFx.doneData,
  target: themeModel.$theme,
})

if (window.matchMedia) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (themeModel.$preference.getState() === "system") {
        changeThemeFx(event.matches ? "dark" : "light")
      }
    })
}
