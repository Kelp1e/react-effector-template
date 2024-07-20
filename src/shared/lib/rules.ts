import { Rule } from "effector-forms"

export const rules = {
  required: <T>(): Rule<string | number | T[]> => ({
    name: "required",
    validator: (value: string | number | T[]) => {
      if (typeof value === "number") {
        return {
          isValid: value.toString().length > 0,
        }
      }

      if (Array.isArray(value)) {
        return { isValid: true }
      }

      return {
        isValid: !!value,
      }
    },
  }),
  email: (): Rule<string> => ({
    name: "email",
    validator: (value: string) => ({
      isValid: /\S+@\S+\.\S+/.test(value),
    }),
  }),
  minLength: <T>(min: number): Rule<string | T[]> => ({
    name: "minLength",
    validator: (value: string | T[]) => ({
      isValid: value.length >= min,
    }),
  }),
  maxLength: <T>(max: number): Rule<string | T[]> => ({
    name: "maxLength",
    validator: (value: string | T[]) => ({
      isValid: value.length <= max,
    }),
  }),
  minValue: (min: number): Rule<number> => ({
    name: "minValue",
    validator: (value: number) => ({
      isValid: value >= min,
    }),
  }),
  maxValue: (max: number): Rule<number> => ({
    name: "maxValue",
    validator: (value: number) => ({
      isValid: value <= max,
    }),
  }),
}
