import React from "react"

import { RouterProvider as BaseRouterProvider } from "atomic-router-react"

import { router } from "./routing.ts"

export const RouterProvider = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return <BaseRouterProvider router={router}>{children}</BaseRouterProvider>
}
