import { AnyAction, Reducer } from "@reduxjs/toolkit"

export type QuizState = {
  activeID: number
  quizes: Quiz[]
}

export type Quiz = {
  id: number
  currentQuestionId: number
  title: string
  description: string
  questions: Question[]
}

export type Question = {
  id: number
  text: string
  correctAnswerID: number
  answers: Answer[]
}

export type Answer = {
  id: number
  text: string
}

const initialState = {
  activeID: 1,
  quizes: [
    {
      id: 1,
      currentQuestionId: 1,
      title: "Super mega quiz",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde necessitatibus nostrum provident et at debitis libero est.",

      questions: [
        {
          id: 1,
          text: "What is the capital of Great Britain?",
          correctAnswerID: 2,

          answers: [
            {
              id: 1,
              text: "Paris",
            },
            {
              id: 2,
              text: "London",
            },
            {
              id: 3,
              text: "Moscow",
            },
            {
              id: 4,
              text: "Tokyo",
            },
            {
              id: 5,
              text: "Toronto",
            },
          ],
        },
        {
          id: 2,
          text: "How many fingers does human normally have?",
          correctAnswerID: 1,

          answers: [
            {
              id: 1,
              text: "20",
            },
            {
              id: 2,
              text: "10",
            },
            {
              id: 3,
              text: "5",
            },
          ],
        },
      ],
    },
  ],
}

const quizReducer: Reducer<QuizState, AnyAction> = (
  state = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    default:
      return state
  }
}

export default quizReducer
