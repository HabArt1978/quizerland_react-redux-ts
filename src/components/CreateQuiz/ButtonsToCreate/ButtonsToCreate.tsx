import { FC } from "react"
import { useAppSelector, useAppDispatch } from "../../../store/hooks"

import { NewQuiz } from "../../../store/newQuiz/types"
import {
  addNewQuestion,
  resetNewQuizState,
} from "../../../store/newQuiz/actions"

import Button from "@mui/material/Button"
import LibraryAddIcon from "@mui/icons-material/LibraryAdd"
import SaveAsIcon from "@mui/icons-material/SaveAs"
import Typography from "@mui/material/Typography"
import theme from "../../../mui-theme"

import { buttonStyle } from "../style"

type AddendumNewQuiz = {
  id: number
  currentQuestionId: number
  rightAttempt: number
  isFinished: boolean
}

interface setQuestionItemProps {
  setQuestionItem: React.Dispatch<React.SetStateAction<number>>
  isValidMerg: boolean
}

export const ButtonToCreate: FC<setQuestionItemProps> = ({
  setQuestionItem,
  isValidMerg,
}) => {
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
    setQuestionItem(1)
    setTimeout(() => {
      setQuestionItem(0)
    })

    return console.log(аddendumNewQuiz)
  }

  return (
    <>
      {!isValidMerg && (
        <Typography
          variant="body2"
          sx={{ color: theme.palette.secondary.main }}
        >
          * Заполните все поля в соответствии с правилами!
        </Typography>
      )}

      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.5rem",
        }}
      >
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
          disabled={!isValidMerg}
          fullWidth
          size="small"
          color="secondary"
          variant="contained"
          sx={buttonStyle}
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
    </>
  )
}
