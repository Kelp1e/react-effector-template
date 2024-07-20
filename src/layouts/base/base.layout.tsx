import React from "react"

interface BaseProps {
  children?: React.ReactNode
}

export const Base = (props: BaseProps) => {
  const { children } = props

  return <div>{children}</div>
}
