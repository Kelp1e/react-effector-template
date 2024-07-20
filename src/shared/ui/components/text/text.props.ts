import React from "react"

type TextOwnProps<T extends React.ElementType = React.ElementType> = {
  as?: T
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 64
}

export type TextProps<T extends React.ElementType> = TextOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof TextOwnProps>
