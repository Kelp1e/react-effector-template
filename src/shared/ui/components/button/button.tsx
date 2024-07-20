import React from "react"

import { cn } from "~/shared/lib"

import { ButtonProps } from "./button.props.ts"

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, children, ...rest } = props

    return (
      <button
        ref={ref}
        className={cn(
          "border-[2rem] border-black px-[10rem] py-[5rem] hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    )
  }
)
