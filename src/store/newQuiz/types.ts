// Создание теста
export type NewQuiz = {
  title: string
  description: string
  questions: NewQuestion[]
}

export type NewQuestion = {
  text: string
  correctAnswerIndex: number
  answers: string[]
}
