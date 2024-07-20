import React from "react"

import {
  FloatingArrow,
  FloatingPortal,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react"

import { cn } from "~/shared/lib"

import { useTooltipContext } from "../../tooltip.context.ts"
import { TooltipPanelProps } from "./tooltip-panel.props.ts"

export const TooltipPanel = React.forwardRef<HTMLDivElement, TooltipPanelProps>(
  (props, ref) => {
    const { className, children } = props

    const context = useTooltipContext()

    const mergeRef = useMergeRefs([context.refs.setFloating, ref])

    const { isMounted, styles: transitionStyles } = useTransitionStyles(
      context.context,
      {
        open: {
          opacity: 100,
        },
        close: {
          opacity: 0,
        },
        duration: 200,
      }
    )

    if (!isMounted) {
      return null
    }

    const { transform, ...floatingStyles } = context.floatingStyles

    return (
      <FloatingPortal>
        <div
          ref={mergeRef}
          style={{
            ...floatingStyles,
            ...transitionStyles,
            transform,
          }}
          {...context.getFloatingProps()}
          className={cn(
            "rounded-[2rem] bg-black p-[5rem] text-[12rem] text-white dark:bg-white dark:text-black",
            className
          )}
        >
          <FloatingArrow
            context={context.context}
            ref={context.arrowRef}
            height={5}
            width={10}
            tipRadius={2}
            className={cn("fill-black dark:fill-white")}
          />
          {children}
        </div>
      </FloatingPortal>
    )
  }
)
