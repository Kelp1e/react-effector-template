import React from "react"

import { Padding, Placement } from "@floating-ui/react"

export interface TooltipOptions {
  position?: Placement
  padding?: Padding
}

export interface TooltipProps extends TooltipOptions {
  children?: React.ReactNode
}
