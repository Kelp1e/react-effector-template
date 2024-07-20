import { createEvent, createStore } from "effector"

export interface User {
  username: string
}

export const userSession = {
  login: createEvent<void>(),
  logout: createEvent<void>(),

  $user: createStore<User | null>(null),
}
