import { useUnit } from "effector-react/effector-react.umd"

import { userSession } from "./user.session.ts"

export const useUser = () => {
  const [user, login, logout] = useUnit([
    userSession.$user,
    userSession.login,
    userSession.logout,
  ])

  const isAuth = user !== null

  return {
    user,
    login,
    logout,
    isAuth,
  }
}
