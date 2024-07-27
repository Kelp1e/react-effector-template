import { LayoutProps } from "~/layouts/layout.type.ts"

export const Base = (props: LayoutProps) => {
  const { children } = props

  return <div>{children}</div>
}
