import { CircularProps } from "./circular.props.ts"

export const Circular = (props: CircularProps) => {
  const { progress, size = 100, thickness = 5, children } = props

  const center = size / 2
  const radius = center - thickness
  const dashArray = 2 * Math.PI * radius
  const dashOffset = dashArray * ((100 - progress) / 100)

  return (
    <div className="relative h-fit w-fit">
      <div style={{ width: size, height: size }} className="-rotate-90">
        <svg style={{ width: size, height: size }}>
          <circle
            r={radius}
            cx={center}
            cy={center}
            stroke={"gray"}
            strokeWidth={thickness}
            className="fill-transparent stroke-black/50 dark:stroke-white/50"
          />
          <circle
            r={radius}
            cx={center}
            cy={center}
            strokeWidth={thickness}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            className="fill-transparent stroke-black transition-all dark:stroke-white"
          />
        </svg>
      </div>
      {children && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      )}
    </div>
  )
}
