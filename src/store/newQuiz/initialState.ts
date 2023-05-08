import { NewQuiz } from "./types"

export const newQuizInitialState: NewQuiz = {
  title: "",
  description: "",
  questions: [
    {
      text: "",
      answers: [],
      correctAnswerIndex: 0,
    },
  ],
}
