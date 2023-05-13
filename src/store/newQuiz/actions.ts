import { Action } from "@reduxjs/toolkit"
import { NewQuestion } from "./types"

export type NewQuizAction =
  | SetQuizAnnotationAction
  | SetQuizQuestionAction
  | AddNewQuestionAction
  | RemoveQuestionAction
  | ResetNewQuizAction

interface SetQuizAnnotationAction extends Action {
  type: "SET_QUIZ_ANNOTATION"
  payload: {
    title?: string
    description?: string
  }
}
export const setQuizAnnotation = (
  payload: SetQuizAnnotationAction["payload"],
): SetQuizAnnotationAction => {
  return {
    type: "SET_QUIZ_ANNOTATION",
    payload,
  }
}

interface SetQuizQuestionAction extends Action {
  type: "SET_QUIZ_QUESTION"
  payload: {
    index: number
    question: NewQuestion
  }
}
export const setQuizQuestion = (
  payload: SetQuizQuestionAction["payload"],
): SetQuizQuestionAction => {
  return {
    type: "SET_QUIZ_QUESTION",
    payload,
  }
}

interface AddNewQuestionAction extends Action {
  type: "ADD_NEW_QUESTION"
}
export const addNewQuestion = (): AddNewQuestionAction => {
  return {
    type: "ADD_NEW_QUESTION",
  }
}

interface RemoveQuestionAction extends Action {
  type: "REMOVE_QUESTION"
  payload: {
    index: number
  }
}
export const removeQuestion = (
  payload: RemoveQuestionAction["payload"],
): RemoveQuestionAction => {
  return {
    type: "REMOVE_QUESTION",
    payload,
  }
}

interface ResetNewQuizAction extends Action {
  type: "RESET_NEW_QUIZ_STATE_ACTION"
}
export const resetNewQuizState = (): ResetNewQuizAction => {
  return {
    type: "RESET_NEW_QUIZ_STATE_ACTION",
  }
}
