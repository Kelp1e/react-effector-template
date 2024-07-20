import { withThemeByClassName } from "@storybook/addon-styling"
import type { Preview, ReactRenderer } from "@storybook/react"
import "tailwindcss/tailwind.css"

import "../src/app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
}

export default preview
