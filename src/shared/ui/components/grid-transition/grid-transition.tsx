import { cn } from "~/shared/lib"

import { GridOpenCloseProps } from "./grid-transition.props.ts"

export const GridTransition = (props: GridOpenCloseProps) => {
  const { opened = false, className, children } = props

  return (
    <div
      className={cn("grid transition-[grid]", {
        "grid-rows-closed": !opened,
        "grid-rows-open": opened,
      })}
    >
      <div className={cn("overflow-hidden", className)}>{children}</div>
    </div>
  )
}
