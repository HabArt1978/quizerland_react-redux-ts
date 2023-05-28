import { Action } from "@reduxjs/toolkit"
import { User } from "./types"

export type AuthAction = SetUserAction | UnsetUserAction

interface SetUserAction extends Action {
  type: "SET_USER"
  payload: User
}
export const setUser = (user: User): SetUserAction => {
  return {
    type: "SET_USER",
    payload: user,
  }
}

interface UnsetUserAction extends Action {
  type: "UNSET_USER"
}
export const unsetUser = (): UnsetUserAction => {
  return {
    type: "UNSET_USER",
  }
}
