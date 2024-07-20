import React from "react"

import { FormProps } from "./form.props.ts"

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (props, ref) => {
    const { onSubmit, children, ...rest } = props

    return (
      <form ref={ref} onSubmit={onSubmit} {...rest}>
        {children}
      </form>
    )
  }
)
