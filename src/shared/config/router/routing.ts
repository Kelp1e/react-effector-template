import {
  createHistoryRouter,
  createRoute,
  createRouterControls,
} from "atomic-router"
import { sample } from "effector"
import { createBrowserHistory } from "history"

import { appStarted } from "~/shared/config"

export const routes = {
  home: createRoute(),
  profile: createRoute(),
}

export const controls = createRouterControls()

export const router = createHistoryRouter({
  routes: [
    {
      path: "/",
      route: routes.home,
    },
    {
      path: "/profile",
      route: routes.profile,
    },
  ],
  controls: controls,
})

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
})
