import { Reducer } from "@reduxjs/toolkit"
import { newQuizInitialState } from "./initialState"
import { NewQuiz } from "./types"
import { NewQuizAction } from "./actions"

const newQuizReducer: Reducer<NewQuiz, NewQuizAction> = (
  state = newQuizInitialState,
  action,
) => {
  switch (action.type) {
    case "SET_QUIZ_ANNOTATION": {
      const { title, description } = action.payload

      return {
        ...state,
        title: title ?? "",
        description: description ?? "",
      }
    }

    case "SET_QUIZ_QUESTION": {
      const { index: newIndex, question: newQuestion } = action.payload

      const questions = state.questions.map((question, index) =>
        index === newIndex ? newQuestion : question,
      )

      return {
        ...state,
        questions,
      }
    }

    default: {
      return state
    }
  }
}

export default newQuizReducer