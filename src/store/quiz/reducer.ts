import { Reducer } from "@reduxjs/toolkit"
import { QuizAction } from "./actions"

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
      title: "Quiz on the knowledge of geography",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde necessitatibus nostrum provident et at debitis libero est.",
      rightAttempt: 0,

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
          text: "What is the capital of the Russian Federation?",
          correctAnswerID: 3,

          answers: [
            {
              id: 1,
              text: "Saint-Petersburg",
            },
            {
              id: 2,
              text: "Toronto",
            },
            {
              id: 3,
              text: "Moscow",
            },
            {
              id: 4,
              text: "Saratov",
            },
            {
              id: 5,
              text: "Ankara",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      currentQuestionId: 1,
      title: "A quiz on the knowledge of history",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde necessitatibus nostrum provident et at debitis libero est.",
      rightAttempt: 0,

      questions: [
        {
          id: 1,
          text: "In what year did the battle for Stalingrad begin?",
          correctAnswerID: 5,

          answers: [
            {
              id: 1,
              text: "in 1943",
            },
            {
              id: 2,
              text: "in 1945",
            },
            {
              id: 3,
              text: "in 1905",
            },
            {
              id: 4,
              text: "in 1917",
            },
            {
              id: 5,
              text: "in 1942",
            },
          ],
        },
        {
          id: 2,
          text: "When did the First World War start?",
          correctAnswerID: 4,

          answers: [
            {
              id: 1,
              text: "in 1812",
            },
            {
              id: 2,
              text: "in 1910",
            },
            {
              id: 3,
              text: "in 1905",
            },
            {
              id: 4,
              text: "in 1914",
            },
            {
              id: 5,
              text: "in 1939",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      currentQuestionId: 1,
      title: "The quiz for car brands",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde necessitatibus nostrum provident et at debitis libero est.",
      rightAttempt: 0,

      questions: [
        {
          id: 1,
          text: "What country produced cars under the brand SAAB?",
          correctAnswerID: 4,

          answers: [
            {
              id: 1,
              text: "Germany",
            },
            {
              id: 2,
              text: "Italy",
            },
            {
              id: 3,
              text: "USA",
            },
            {
              id: 4,
              text: "Sweden",
            },
            {
              id: 5,
              text: "France",
            },
          ],
        },
        {
          id: 2,
          text: "Who patented the first car with a gasoline engine?",
          correctAnswerID: 2,

          answers: [
            {
              id: 1,
              text: "Nicolas-Joseph Cugnot",
            },
            {
              id: 2,
              text: "Friedrich Michael Benz",
            },
            {
              id: 3,
              text: "Ivan Petrovich Kulibin",
            },
            {
              id: 4,
              text: "Henry Ford",
            },
            {
              id: 5,
              text: "Jean Joseph Etienne Lenoir",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      currentQuestionId: 1,
      title: "Quiz on the theme of music",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde necessitatibus nostrum provident et at debitis libero est.",
      rightAttempt: 0,

      questions: [
        {
          id: 1,
          text: "In what year was the album 'The Dark Side of the Moon' by Pink Floyd released?",
          correctAnswerID: 5,

          answers: [
            {
              id: 1,
              text: "1969",
            },
            {
              id: 2,
              text: "1970",
            },
            {
              id: 3,
              text: "1981",
            },
            {
              id: 4,
              text: "1975",
            },
            {
              id: 5,
              text: "1973",
            },
          ],
        },
        {
          id: 2,
          text: "What was the title of the first Enigma album?",
          correctAnswerID: 2,

          answers: [
            {
              id: 1,
              text: "The Cross of Changes",
            },
            {
              id: 2,
              text: "MCMXC a.D.",
            },
            {
              id: 3,
              text: "Seven Lives Many Faces",
            },
            {
              id: 4,
              text: "The Fall Of a Rebel Angel",
            },
            {
              id: 5,
              text: "The Screen Behind the Mirror",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      currentQuestionId: 1,
      title: "Art history quiz",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde necessitatibus nostrum provident et at debitis libero est.",
      rightAttempt: 0,

      questions: [
        {
          id: 1,
          text: "Who painted the picture 'The Ninth Shaft' ?",
          correctAnswerID: 4,

          answers: [
            {
              id: 1,
              text: "Vasily Surikov",
            },
            {
              id: 2,
              text: "Claude Monet",
            },
            {
              id: 3,
              text: "Sandro Botticelli",
            },
            {
              id: 4,
              text: "Ivan Aivazovsky",
            },
            {
              id: 5,
              text: "Salvador Dali",
            },
          ],
        },
        {
          id: 2,
          text: "What is Kazimir Malevich's most famous painting?",
          correctAnswerID: 1,

          answers: [
            {
              id: 1,
              text: "Black square",
            },
            {
              id: 2,
              text: "Battle of the gladiators",
            },
            {
              id: 3,
              text: "The Last Judgment",
            },
            {
              id: 4,
              text: "Burlaki on the Volga",
            },
            {
              id: 5,
              text: "Sistine Madonna",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      currentQuestionId: 1,
      title: "Quiz about space and astronautics",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde necessitatibus nostrum provident et at debitis libero est.",
      rightAttempt: 0,

      questions: [
        {
          id: 1,
          text: "What was the name of the first astronaut to go into space ?",
          correctAnswerID: 2,

          answers: [
            {
              id: 1,
              text: "Yuri Gagarin",
            },
            {
              id: 2,
              text: "Alexei Leonov",
            },
            {
              id: 3,
              text: "Valentina Tereshkova",
            },
            {
              id: 4,
              text: "Sergei Korolev",
            },
            {
              id: 5,
              text: "Sally Ride",
            },
          ],
        },
        {
          id: 2,
          text: "What is the name of the third planet from the sun?",
          correctAnswerID: 2,

          answers: [
            {
              id: 1,
              text: "Pluto",
            },
            {
              id: 2,
              text: "Earth",
            },
            {
              id: 3,
              text: "Cassiopeia",
            },
            {
              id: 4,
              text: "Moon",
            },
            {
              id: 5,
              text: "Jupiter",
            },
          ],
        },
      ],
    },
  ],
}

const quizReducer: Reducer<QuizState, QuizAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "TO_NEXT_QUESTION": {
      const activeQuiz = state.quizes.find(quiz => quiz.id === state.activeID)
      if (!activeQuiz) return state

      const newActiveQuiz = { ...activeQuiz }
      newActiveQuiz.currentQuestionId += 1

      const newQuizes = state.quizes.map(quiz =>
        quiz.id === activeQuiz.id ? newActiveQuiz : quiz,
      )

      return {
        ...state,
        quizes: newQuizes,
      }
    }

    case "RESET_CURRENT_QUESTION_ID": {
      const activeQuiz = state.quizes.find(quiz => quiz.id === state.activeID)
      if (!activeQuiz) return state

      const newActiveQuiz = { ...activeQuiz }
      newActiveQuiz.currentQuestionId = 1

      const newQuizes = state.quizes.map(quiz =>
        quiz.id === activeQuiz.id ? newActiveQuiz : quiz,
      )

      return {
        ...state,
        quizes: newQuizes,
      }
    }

    case "SET_ACTIVE_QUIZ":
      return {
        ...state,
        activeID: action.payload.id,
      }

    case "ADD_RIGHT_ATTEMPT": {
      const activeQuiz = state.quizes.find(quiz => quiz.id === state.activeID)
      if (!activeQuiz) return state

      const newActiveQuiz = { ...activeQuiz }
      newActiveQuiz.rightAttempt += 1

      const newQuizes = state.quizes.map(quiz =>
        quiz.id === activeQuiz.id ? newActiveQuiz : quiz,
      )
      return {
        ...state,
        quizes: newQuizes,
      }
    }

    case "RESET_RIGHT_ATTEMPT": {
      const activeQuiz = state.quizes.find(quiz => quiz.id === state.activeID)
      if (!activeQuiz) return state

      const newActiveQuiz = { ...activeQuiz }
      newActiveQuiz.rightAttempt = 0

      const newQuizes = state.quizes.map(quiz =>
        quiz.id === activeQuiz.id ? newActiveQuiz : quiz,
      )
      return {
        ...state,
        quizes: newQuizes,
      }
    }

    default:
      return state
  }
}

export default quizReducer
