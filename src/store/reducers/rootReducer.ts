import { combineReducers } from "@reduxjs/toolkit"
import quizReducer from "./quizReducer"
import navigationReducer from "./navigationReducer"

const rootReducer = combineReducers({
  quizState: quizReducer,
  navigationState: navigationReducer,
})

export default rootReducer
