import { Action } from "@reduxjs/toolkit"

export type NavAction = MenuToggle

interface MenuToggle extends Action {
  type: "MENU_TOGGLE"
}
export const menuToggle = (): MenuToggle => {
  return {
    type: "MENU_TOGGLE",
  }
}
