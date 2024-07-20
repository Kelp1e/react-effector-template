import { Radio, RadioGroup } from "@headlessui/react"
import { useUnit } from "effector-react"

import { homeModel } from "~/pages/home/home.model"

import { cn, LINK } from "~/shared/lib"
import {
  Icon,
  Preference,
  Text,
  Tooltip,
  TooltipPanel,
  TooltipTrigger,
  useTheme,
} from "~/shared/ui"

export const Home = () => {
  const [increment, decrement, counter] = useUnit([
    homeModel.incremented,
    homeModel.decremented,
    homeModel.$counter,
  ])

  const { theme, preference, setTheme, setPreference } = useTheme()

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center">
        <RadioGroup
          value={theme}
          onChange={setTheme}
          as={"div"}
          className="flex items-center gap-[5rem]"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Radio as="button" value="light" disabled={theme === "light"}>
                <Icon.Sun
                  className={cn(
                    "w-[24rem] hover:fill-black dark:hover:fill-white",
                    { "fill-black": theme === "light" }
                  )}
                />
              </Radio>
            </TooltipTrigger>
            <TooltipPanel>White theme</TooltipPanel>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Radio as="button" value="dark" disabled={theme === "dark"}>
                <Icon.Moon
                  className={cn(
                    "w-[24rem] hover:fill-black dark:hover:fill-white",
                    { "fill-white": theme === "dark" }
                  )}
                />
              </Radio>
            </TooltipTrigger>
            <TooltipPanel>Dark theme</TooltipPanel>
          </Tooltip>
        </RadioGroup>
        <Text>
          Theme Preference:
          <select
            value={preference}
            className="bg-transparent focus:outline-none"
            onChange={(event) =>
              setPreference(event.target.value as Preference)
            }
          >
            <option value="personal">Personal</option>
            <option value="system">System</option>
          </select>
        </Text>
        <div className="flex flex-col items-center">
          <Text as="h1" className="text-[32rem]">
            Counter: <Text className="underline">{counter}</Text>
          </Text>
          <div className="flex gap-[8rem]">
            <Tooltip position="bottom">
              <TooltipTrigger asChild>
                <button
                  onClick={decrement}
                  className="text-[24rem] hover:underline"
                >
                  -
                </button>
              </TooltipTrigger>
              <TooltipPanel>Decrement</TooltipPanel>
            </Tooltip>
            <Tooltip position="bottom">
              <TooltipTrigger asChild>
                <button
                  onClick={increment}
                  className="text-[24rem] hover:underline"
                >
                  +
                </button>
              </TooltipTrigger>
              <TooltipPanel>Increment</TooltipPanel>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-[16rem]">
        <Text>
          By{" "}
          <Tooltip>
            <TooltipTrigger>
              <Text
                as="a"
                href={LINK.KELP1E_GITHUB}
                target="_blank"
                className="hover:underline"
              >
                Kelp1e
              </Text>
            </TooltipTrigger>
            <TooltipPanel>Go to Github</TooltipPanel>
          </Tooltip>
        </Text>
      </div>
    </div>
  )
}
