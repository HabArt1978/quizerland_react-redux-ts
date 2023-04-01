import { Action } from "@reduxjs/toolkit"

export type QuizAction =
  | ToNextQuestion
  | ResetCurrentQuestionId
  | SetActiveQuiz
  | ToNextQuiz

interface ToNextQuestion extends Action {
  type: "TO_NEXT_QUESTION"
}
export const toNextQuestion = (): ToNextQuestion => {
  return {
    type: "TO_NEXT_QUESTION",
  }
}

interface ResetCurrentQuestionId extends Action {
  type: "RESET_CURRENT_QUESTION_ID"
}
export const resetCurrentQuestionId = () => {
  return {
    type: "RESET_CURRENT_QUESTION_ID",
  }
}

interface SetActiveQuiz extends Action {
  type: "SET_ACTIVE_QUIZ"
  payload: {
    id: number
  }
}
export const setActiveQuiz = (id: number) => {
  return {
    type: "SET_ACTIVE_QUIZ",
    payload: {
      id,
    },
  }
}

interface ToNextQuiz extends Action {
  type: "TO_NEXT_QUIZ"
}
export const toNextQuiz = (): ToNextQuiz => {
  return {
    type: "TO_NEXT_QUIZ",
  }
}
