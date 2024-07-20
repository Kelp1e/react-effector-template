import React from "react"

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react"

import { TooltipOptions } from "./tooltip.props.ts"

export const useTooltip = (options: TooltipOptions) => {
  const { position = "top", padding = 5 } = options

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const arrowRef = React.useRef<null>(null)

  const floating = useFloating({
    placement: position,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip(),
      shift({ padding: padding }),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(floating.context, {
    move: false,
    handleClose: safePolygon(),
  })
  const focus = useFocus(floating.context)
  const dismiss = useDismiss(floating.context)
  const role = useRole(floating.context, { role: "tooltip" })

  const interactions = useInteractions([hover, focus, dismiss, role])

  return {
    arrowRef,
    ...floating,
    ...interactions,
  }
}
