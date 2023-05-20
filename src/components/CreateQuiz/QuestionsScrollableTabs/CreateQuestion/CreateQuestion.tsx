import { FC, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { useAppSelector, useAppDispatch } from "../../../../store/hooks"

import { schemaYupToQuestion } from "../../validation"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { setQuizQuestion } from "../../../../store/newQuiz/actions"
import { NewQuestion } from "../../../../store/newQuiz/types"

import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import theme from "../../../../mui-theme"

import {
  textFieldStyle,
  answersFieldStyle,
  selectFieldStyle,
} from "../../style"

type FormData = yup.InferType<typeof schemaYupToQuestion>

const formToQuestion = (form: any) => {
  const question: NewQuestion = {
    text: form.text ?? "",
    correctAnswerIndex: form.correctAnswerIndex ?? 0,
    answers: form.answers?.map((v: any) => v ?? "") ?? [],
  }

  return question
}

type CreateQuestionProps = {
  questionIndex: number
  setIsValidCreateQuestion: React.Dispatch<React.SetStateAction<boolean>>
}
const CreateQuestion: FC<CreateQuestionProps> = ({
  questionIndex,
  setIsValidCreateQuestion,
}) => {
  const dispatch = useAppDispatch()
  const question = useAppSelector(
    state => state.newQuizState.questions[questionIndex],
  )

  const {
    watch,
    control,
    formState: { isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      text: question.text,
      correctAnswerIndex: question.correctAnswerIndex,
      answers: question.answers,
    },
    resolver: yupResolver(schemaYupToQuestion),
  })

  useEffect(() => {
    isValid ? setIsValidCreateQuestion(true) : setIsValidCreateQuestion(false)
  }, [isValid, setIsValidCreateQuestion])

  useEffect(() => {
    const subscription = watch(value => {
      dispatch(
        setQuizQuestion({
          index: questionIndex,
          question: formToQuestion(value),
        }),
      )
    })

    return () => subscription.unsubscribe()
  }, [watch, dispatch, questionIndex])

  return (
    <div style={{ marginTop: "2rem" }}>
      <Controller
        control={control}
        name="text"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            fullWidth
            type="text"
            label="Введите текст вопроса"
            required
            variant="outlined"
            value={value}
            onChange={event => onChange(event)}
            error={!!error}
            helperText={error?.message}
            sx={textFieldStyle}
          />
        )}
      />

      <Container>
        {question.answers.map((_, index) => (
          <Controller
            key={index}
            control={control}
            name={`answers.${index}`}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                fullWidth
                type="text"
                label={`${index + 1}-й вариант ответа`}
                required
                variant="filled"
                value={value}
                onChange={event => onChange(event)}
                error={!!error}
                helperText={error?.message}
                sx={answersFieldStyle}
                InputProps={{ disableUnderline: true }}
              />
            )}
          />
        ))}
      </Container>

      <Controller
        control={control}
        name="correctAnswerIndex"
        render={({ field: { value, onChange } }) => (
          <div>
            <FormControl sx={selectFieldStyle}>
              <InputLabel id="select-label">
                Выберите правильный ответ
              </InputLabel>
              <Select
                displayEmpty
                labelId="select-label"
                id="selectID"
                label="Выберите правильный ответ"
                value={value}
                onChange={event => onChange(event)}
                autoWidth
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                <MenuItem
                  disabled
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  <em>Не ошибитесь...!</em>
                </MenuItem>
                {question.answers.map((_, index) => (
                  <MenuItem
                    key={index}
                    value={index}
                  >
                    {`${index + 1}-й вариант ответа`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}
      />
    </div>
  )
}

export default CreateQuestion
