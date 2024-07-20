import React from "react"

import { cn } from "~/shared/lib"

import { TextProps } from "./text.props.ts"

export const Text = <T extends React.ElementType>(props: TextProps<T>) => {
  const { as: Tag = "span", size, style, className, children, ...rest } = props

  return (
    <Tag
      style={{
        fontSize: size ? `${size}rem` : undefined,
        ...style,
      }}
      {...rest}
      className={cn("", className)}
    >
      {children}
    </Tag>
  )
}
