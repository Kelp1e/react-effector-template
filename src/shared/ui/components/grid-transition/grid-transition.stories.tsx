import React from "react"

import { StoryObj } from "@storybook/react"

import { GridTransition } from "~/shared/ui"

const meta = {
  component: GridTransition,
  title: "shared/ui/components/grid-transition/GridTransition",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false)

    const handleOnClick = () => {
      setIsVisible((prev) => !prev)
    }

    return (
      <div>
        <button onClick={handleOnClick}>{isVisible ? "close" : "open"}</button>
        <GridTransition opened={isVisible}>{args.children}</GridTransition>
      </div>
    )
  },
  args: {
    children: (
      <div className="text-[64rem]">
        some <br /> large <br /> hidden <br /> content
      </div>
    ),
  },
}
