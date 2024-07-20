import React from "react"

export interface GridOpenCloseProps
  extends React.HTMLAttributes<HTMLDivElement> {
  opened?: boolean
  duration?: number
}
