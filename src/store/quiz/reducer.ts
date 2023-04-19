import { Reducer } from "@reduxjs/toolkit"
import { QuizAction } from "./actions"
import { quizInitialState } from "./initialState"
import { QuizState } from "./types"

const quizReducer: Reducer<QuizState, QuizAction> = (
  state = quizInitialState,
  action,
) => {
  switch (action.type) {
    case "TO_NEXT_QUESTION": {
      const activeQuiz = state.quizes.find(quiz => quiz.id === state.activeID)
      if (!activeQuiz) return state

      const newActiveQuiz = { ...activeQuiz }
      if (newActiveQuiz.currentQuestionId === newActiveQuiz.questions.length) {
        newActiveQuiz.isFinished = true
      } else {
        newActiveQuiz.currentQuestionId += 1
      }

      const newQuizes = state.quizes.map(quiz =>
        quiz.id === activeQuiz.id ? newActiveQuiz : quiz,
      )

      return {
        ...state,
        quizes: newQuizes,
      }
    }

    case "RESET_CURRENT_QUESTION_ID": {
      const activeQuiz = state.quizes.find(quiz => quiz.id === state.activeID)
      if (!activeQuiz) return state

      const newActiveQuiz = { ...activeQuiz }
      newActiveQuiz.currentQuestionId = 1
      newActiveQuiz.isFinished = false

      const newQuizes = state.quizes.map(quiz =>
        quiz.id === activeQuiz.id ? newActiveQuiz : quiz,
      )

      return {
        ...state,
        quizes: newQuizes,
      }
    }

    case "SET_ACTIVE_QUIZ":
      return {
        ...state,
        activeID: action.payload.id,
      }

    case "ADD_RIGHT_ATTEMPT": {
      const activeQuiz = state.quizes.find(quiz => quiz.id === state.activeID)
      if (!activeQuiz) return state

      const newActiveQuiz = { ...activeQuiz }
      newActiveQuiz.rightAttempt += 1

      const newQuizes = state.quizes.map(quiz =>
        quiz.id === activeQuiz.id ? newActiveQuiz : quiz,
      )
      return {
        ...state,
        quizes: newQuizes,
      }
    }

    case "RESET_RIGHT_ATTEMPT": {
      const activeQuiz = state.quizes.find(quiz => quiz.id === state.activeID)
      if (!activeQuiz) return state

      const newActiveQuiz = { ...activeQuiz }
      newActiveQuiz.rightAttempt = 0

      const newQuizes = state.quizes.map(quiz =>
        quiz.id === activeQuiz.id ? newActiveQuiz : quiz,
      )
      return {
        ...state,
        quizes: newQuizes,
      }
    }

    default:
      return state
  }
}

export default quizReducer
