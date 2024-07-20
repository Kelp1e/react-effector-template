import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...classValues: ClassValue[]) => twMerge(clsx(classValues))
