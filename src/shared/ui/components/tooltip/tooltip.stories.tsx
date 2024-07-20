import { Meta, StoryObj } from "@storybook/react"

import { Tooltip, TooltipPanel, TooltipTrigger } from "~/shared/ui"

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "shared/ui/components/tooltip/Tooltip",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => {
    return (
      <Tooltip position={args.position} padding={args.padding}>
        <TooltipTrigger>Trigger</TooltipTrigger>
        <TooltipPanel>Panel</TooltipPanel>
      </Tooltip>
    )
  },
  args: {
    position: "top",
    padding: 5,
  },
}
