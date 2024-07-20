import { StoryObj } from "@storybook/react"

import { Circular } from "~/shared/ui"

const meta = {
  component: Circular,
  title: "shared/ui/components/circular/Circular",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    progress: 50,
    thickness: 10,
    size: 200,
    children: "Hello!",
  },
}
