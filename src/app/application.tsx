import { Pages } from "~/pages"

import { RouterProvider } from "~/shared/config"

export const App = () => {
  return (
    <RouterProvider>
      <Pages />
    </RouterProvider>
  )
}
