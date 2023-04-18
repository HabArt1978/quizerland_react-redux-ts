import Radio from "@mui/material/Radio"
import FormControl from "@mui/material/FormControl"
import Button from "@mui/material/Button"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"

import theme from "../../mui-theme"
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react"
import { Answer, Question, Quiz } from "../../store/quiz/reducer"

import { toNextQuestion } from "../../store/quiz/actions"
import { useAppDispatch } from "../../store/hooks"
import { addRightAttempt } from "../../store/quiz/actions"

type AnswersRadioGroupProps = {
  questionProp: Question
  activeQuizProp: Quiz
}

export default function AnswersRadioGroup({
  questionProp,
  activeQuizProp,
}: AnswersRadioGroupProps) {
  const [selected, setSelected] = useState<null | number>(null)
  const [disabledAttempts, setDisabledAttempts] = useState<number[]>([])
  const dispatch = useAppDispatch()

  const onAnswer = () => {
    if (!selected) return
    setDisabledAttempts([...disabledAttempts, selected])

    const isCorrect = questionProp.correctAnswerID === selected

    if (isCorrect) {
      setSelected(null)

      setTimeout(() => {
        dispatch(toNextQuestion())
        setDisabledAttempts([])
      }, 1000)
    }

    if (isCorrect && disabledAttempts.length === 0) {
      dispatch(addRightAttempt())
    }
  }

  const setRadioButton = (answer: Answer) => {
    const isCorrect = questionProp.correctAnswerID === answer.id
    const isSelected = selected === answer.id

    if (disabledAttempts.includes(answer.id))
      if (isCorrect) {
        return (
          <CheckCircleIcon
            color="success"
            sx={{ m: "9px" }}
          />
        )
      } else {
        return (
          <CancelIcon
            color="secondary"
            sx={{ m: "9px" }}
          />
        )
      }
    else {
      return (
        <Radio
          checked={isSelected}
          color="secondary"
        />
      )
    }
  }

  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem 2rem 1rem 2rem",
      }}
    >
      <List>
        {questionProp.answers.map(answer => {
          const isSelected = selected === answer.id

          return (
            <ListItemButton
              key={answer.text}
              onClick={() => setSelected(answer.id)}
              color="primary"
              sx={{
                backgroundColor: isSelected
                  ? "rgba(235, 171, 28, 0.08)"
                  : "unset",
              }}
              disabled={disabledAttempts.includes(answer.id)}
            >
              <ListItemIcon>{setRadioButton(answer)}</ListItemIcon>
              <ListItemText
                primary={answer.text}
                sx={{
                  color: isSelected ? theme.palette.secondary.main : "inherit",
                }}
              />
            </ListItemButton>
          )
        })}
      </List>
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            fontSize: "1rem",
            color: `${theme.palette.grey[500]}`,
            flexShrink: "0",
            alignSelf: "end",
          }}
        >
          questions &nbsp; {questionProp.id} &nbsp; of &nbsp;{" "}
          {activeQuizProp.questions.length}
        </span>
        <Button
          variant="contained"
          disabled={!selected}
          startIcon={<CheckCircleIcon />}
          onClick={onAnswer}
        >
          ANSWER
        </Button>
      </span>
    </FormControl>
  )
}
