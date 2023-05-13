import { useAppSelector, useAppDispatch } from "../../store/hooks"
import { NewQuiz } from "../../store/newQuiz/types"

import { addNewQuestion, resetNewQuizState } from "../../store/newQuiz/actions"

import Button from "@mui/material/Button"
import LibraryAddIcon from "@mui/icons-material/LibraryAdd"
import SaveAsIcon from "@mui/icons-material/SaveAs"
import theme from "../../mui-theme"

type AddendumNewQuiz = {
  id: number
  currentQuestionId: number
  rightAttempt: number
  isFinished: boolean
}

export const ButtonGroupToCreate = () => {
  const newQuizData = useAppSelector(({ newQuizState }) => newQuizState)
  const dispatch = useAppDispatch()

  const onSubmit = (data: NewQuiz) => {
    const аddendumNewQuiz: AddendumNewQuiz = {
      id: 1,
      currentQuestionId: 1,
      rightAttempt: 0,
      isFinished: false,
      ...data,
    }

    dispatch(resetNewQuizState())

    return console.log(аddendumNewQuiz)
  }

  return (
    <span style={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        type="button"
        onClick={() => dispatch(addNewQuestion())}
        fullWidth
        size="small"
        color="primary"
        variant="contained"
        sx={{
          py: 1.5,
          bgcolor: theme.palette.primary.dark,
          " :disabled": {
            color: theme.palette.error.contrastText,
          },
        }}
        startIcon={
          <LibraryAddIcon
            sx={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        }
      >
        Добавить вопрос
      </Button>
      <span style={{ width: "2rem" }}></span>
      <Button
        type="submit"
        onClick={() => onSubmit(newQuizData)}
        fullWidth
        size="small"
        color="secondary"
        variant="contained"
        sx={{ py: 1.5, bgcolor: theme.palette.secondary.dark }}
        startIcon={
          <SaveAsIcon
            sx={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        }
      >
        Создать тест
      </Button>
    </span>
  )
}
