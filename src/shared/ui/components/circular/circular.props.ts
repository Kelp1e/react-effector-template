import React from "react"

import { Percentage } from "~/shared/lib"

export interface CircularProps {
  progress: Percentage
  size?: number
  thickness?: number
  children?: React.ReactNode
}
