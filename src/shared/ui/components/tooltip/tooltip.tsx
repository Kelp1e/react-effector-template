import { TooltipContext } from "./tooltip.context.ts"
import { useTooltip } from "./tooltip.hook.ts"
import { TooltipProps } from "./tooltip.props.ts"

export const Tooltip = (props: TooltipProps) => {
  const { children, ...rest } = props

  const tooltip = useTooltip(rest)

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  )
}
