import React from "react"

import { StoryObj } from "@storybook/react"

import { Button, Modal } from "~/shared/ui"

const meta = {
  component: Modal,
  title: "shared/ui/components/modal/Modal",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const open = () => {
      setIsOpen(true)
    }

    const close = () => {
      setIsOpen(false)
    }

    return (
      <div>
        <Button onClick={open}>Open modal</Button>
        <Modal open={isOpen || args.open} onClose={close}>
          {args.children}
        </Modal>
      </div>
    )
  },
  args: {
    open: false,
    onClose: () => {},
    children: "Hello!",
  },
}
