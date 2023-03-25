import { combineReducers } from "@reduxjs/toolkit"
import quizReducer from "./quizReducer"

const rootReducer = combineReducers({
  quizState: quizReducer,
})

export default rootReducer
