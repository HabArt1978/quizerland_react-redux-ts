import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

const getActiveQuiz = ({ quizState }: RootState) =>
  quizState.quizes.find(quiz => quiz.id === quizState.activeID)

// const getActiveID = ({ quizState }: RootState) => quizState.activeID

// const getQuizesLength = ({ quizState }: RootState) => quizState.quizes.length

export const activeQuizSelector = createSelector(
  getActiveQuiz,
  activeQuiz => activeQuiz,
)

export const currentQuestionSelector = createSelector(
  activeQuizSelector,
  activeQuiz =>
    activeQuiz?.questions?.find(
      question => question.id === activeQuiz.currentQuestionId,
    ),
)

// export const activeIdSelector = createSelector(
//   getActiveID,
//   activeID => activeID,
// )

// export const quizesLengthSelector = createSelector(
//   getQuizesLength,
//   quizesLength => quizesLength,
// )
