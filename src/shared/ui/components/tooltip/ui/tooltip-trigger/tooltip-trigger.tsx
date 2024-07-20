import React from "react"

import { useMergeRefs } from "@floating-ui/react"

import { useTooltipContext } from "../../tooltip.context.ts"
import { TooltipTriggerProps } from "./tooltip-trigger.props.ts"

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  TooltipTriggerProps
>((props, ref) => {
  const { asChild, children, ...rest } = props

  const context = useTooltipContext()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef = (children as any).ref

  const mergedRef = useMergeRefs([context.refs.setReference, ref, childrenRef])

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref: mergedRef,
        ...rest,
        ...children.props,
        "data-state": context.context.open ? "open" : "closed",
      })
    )
  }

  return (
    <div
      ref={mergedRef}
      data-state={context.context.open ? "open" : "closed"}
      className="inline"
      {...context.getReferenceProps()}
    >
      {children}
    </div>
  )
})
