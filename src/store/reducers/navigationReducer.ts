import { Reducer } from "@reduxjs/toolkit"
import { NavAction } from "../actions/navigationAction"

export type NavState = {
  isOpen: boolean
}

const initialState = {
  isOpen: false,
}

const navigationReducer: Reducer<NavState, NavAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "MENU_TOGGLE":
      return {
        isOpen: !state.isOpen,
      }

    default:
      return state
  }
}

export default navigationReducer
