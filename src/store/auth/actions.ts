import { Action } from "@reduxjs/toolkit"
import { User } from "./types"

export type AuthAction = SetUserAction

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
