import { createEffect } from "effector"

import { Theme } from "~/shared/ui"

export const getSystemTheme = (): Theme =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"

export const changeThemeFx = createEffect<Theme, Theme>((theme) => {
  const html = document.documentElement.classList

  if (theme === "light") {
    html.remove("dark")
  } else if (theme === "dark") {
    html.add("dark")
  }

  return theme
})
