import { combineReducers } from "@reduxjs/toolkit"
import quizReducer from "./quiz/reducer"
import navigationReducer from "./navigation/reducer"
import newQuizReducer from "./newQuiz/reducer"

const rootReducer = combineReducers({
  quizState: quizReducer,
  navigationState: navigationReducer,
  newQuizState: newQuizReducer,
})

export default rootReducer
