import { Action } from "@reduxjs/toolkit"

export type QuizAction =
  | ToNextQuestion
  | ResetCurrentQuestionId
  | SetActiveQuiz
  | AddRightAttempt
  | ResetRightAttempt

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

interface AddRightAttempt extends Action {
  type: "ADD_RIGHT_ATTEMPT"
}
export const addRightAttempt = (): AddRightAttempt => {
  return {
    type: "ADD_RIGHT_ATTEMPT",
  }
}

interface ResetRightAttempt extends Action {
  type: "RESET_RIGHT_ATTEMPT"
}
export const resetRightAttempt = (): ResetRightAttempt => {
  return {
    type: "RESET_RIGHT_ATTEMPT",
  }
}
