import { combineReducers } from "@reduxjs/toolkit"
import quizReducer from "./quiz/reducer"
import navigationReducer from "./navigation/reducer"

const rootReducer = combineReducers({
  quizState: quizReducer,
  navigationState: navigationReducer,
})

export default rootReducer
