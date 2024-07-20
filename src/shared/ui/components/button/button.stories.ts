import { StoryObj } from "@storybook/react"

import { Button } from "~/shared/ui"

const meta = {
  component: Button,
  title: "shared/ui/components/button/Button",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Click Me!",
  },
}
