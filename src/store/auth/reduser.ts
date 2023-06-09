import { Reducer } from "@reduxjs/toolkit"
import { AuthAction } from "./actions"
import { AuthState } from "./types"
import { authInitialState } from "./initialState"

const AuthReduser: Reducer<AuthState, AuthAction> = (
  state = authInitialState,
  action,
) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      }
    }

    case "UNSET_USER": {
      return {
        ...state,
        user: null,
      }
    }

    default:
      return state
  }
}

export default AuthReduser
