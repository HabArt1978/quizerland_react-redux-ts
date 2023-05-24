import { combineReducers } from "@reduxjs/toolkit"
import quizReducer from "./quiz/reducer"
import navigationReducer from "./navigation/reducer"
import newQuizReducer from "./newQuiz/reducer"
import AuthReduser from "./auth/reduser"

const rootReducer = combineReducers({
  quizState: quizReducer,
  navigationState: navigationReducer,
  newQuizState: newQuizReducer,
  authState: AuthReduser,
})

export default rootReducer
