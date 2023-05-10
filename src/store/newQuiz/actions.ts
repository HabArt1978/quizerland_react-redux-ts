import { Action } from "@reduxjs/toolkit"
import { NewQuestion } from "./types"

export type NewQuizAction =
  | SetQuizAnnotationAction
  | SetQuizQuestionAction
  | AddNewQuestionAction
  | DeleteTabAction

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

interface DeleteTabAction extends Action {
  type: "DELETE_TAB_ACTION"
  payload: {
    index: number
  }
}
export const deleteTab = (
  payload: DeleteTabAction["payload"],
): DeleteTabAction => {
  return {
    type: "DELETE_TAB_ACTION",
    payload,
  }
}
