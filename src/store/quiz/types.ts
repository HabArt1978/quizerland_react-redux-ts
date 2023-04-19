export type QuizState = {
  activeID: number
  quizes: Quiz[]
}

export type Quiz = {
  id: number
  currentQuestionId: number
  title: string
  description: string
  rightAttempt: number
  isFinished: boolean
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
