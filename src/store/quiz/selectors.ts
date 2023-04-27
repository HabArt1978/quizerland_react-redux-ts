import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"

const getActiveQuiz = ({ quizState }: RootState) =>
  quizState.quizes.find(quiz => quiz.id === quizState.activeID)

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
