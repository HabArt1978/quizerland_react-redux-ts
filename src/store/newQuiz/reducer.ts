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

    case "ADD_NEW_QUESTION": {
      const questions = state.questions

      const newQuestions = [...questions]

      const newQuestion = {
        text: "",
        answers: ["", "", "", "", ""],
        correctAnswerIndex: 0,
      }

      newQuestions.push(newQuestion)

      return {
        ...state,
        questions: newQuestions,
      }
    }

    case "REMOVE_QUESTION": {
      const questions = [...state.questions]

      const newQuestions = questions.filter(
        (_, index) => index !== action.payload.index,
      )

      return {
        ...state,
        questions: newQuestions,
      }
    }

    case "RESET_NEW_QUIZ_STATE_ACTION": {
      return {
        ...newQuizInitialState,
      }
    }

    default: {
      return state
    }
  }
}

export default newQuizReducer
