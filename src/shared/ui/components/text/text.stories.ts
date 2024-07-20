import { StoryObj } from "@storybook/react"

import { Text } from "~/shared/ui"

const meta = {
  component: Text,
  title: "shared/ui/components/text/Text",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Lorem Ipsum",
  },
}
