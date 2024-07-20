import { createEffect } from "effector"

import { request } from "~/shared/api/request.ts"

import { GetTodosRequest, GetTodosResponse } from "./get-todos.dto.ts"

export const getTodosFx = createEffect<GetTodosRequest, GetTodosResponse>(() =>
  request.get("/todos").then((response) => response.data)
)
