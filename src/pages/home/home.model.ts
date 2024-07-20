import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector"

import { api } from "~/shared/api"
import { Todo } from "~/shared/api/todo"

import { route } from "./home.route.ts"

export const homeModel = {
  getTodosFx: attach({ effect: api.getTodosFx }),
  incremented: createEvent<void>(),
  decremented: createEvent<void>(),

  $counter: createStore<number>(0),
  $todos: createStore<Todo[] | null>(null),
}

sample({
  clock: route.opened,
  target: homeModel.getTodosFx,
})

sample({
  clock: homeModel.getTodosFx.doneData,
  target: createEffect((data: Todo[]) => {
    console.log("getTodosFx.doneData::", data)
  }),
})

sample({
  clock: homeModel.incremented,
  source: homeModel.$counter,
  fn: (counter) => counter + 1,
  target: homeModel.$counter,
})

sample({
  clock: homeModel.decremented,
  source: homeModel.$counter,
  fn: (counter) => counter - 1,
  target: homeModel.$counter,
})
