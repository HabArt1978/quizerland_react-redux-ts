import { FC, useEffect } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useAppSelector, useAppDispatch } from "../../store/hooks"

import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import LibraryAddIcon from "@mui/icons-material/LibraryAdd"
import SaveAsIcon from "@mui/icons-material/SaveAs"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import theme from "../../mui-theme"

import { textFieldStyle, answersFieldStyle, selectFieldStyle } from "./style"

import { schemaYupToQuestion } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { setQuizQuestion } from "../../store/newQuiz/actions"
import { NewQuestion } from "../../store/newQuiz/types"

type FormData = yup.InferType<typeof schemaYupToQuestion>

type AnswerField = {
  inputName: keyof FormData | `answers.${number}`
  label: string
  id: number
}
const answerFields: AnswerField[] = [
  {
    inputName: "answers.0",
    label: "1-й вариант ответа",
    id: 1,
  },
  {
    inputName: "answers.1",
    label: "2-й вариант ответа",
    id: 2,
  },
  {
    inputName: "answers.2",
    label: "3-й вариант ответа",
    id: 3,
  },
  {
    inputName: "answers.3",
    label: "4-й вариант ответа",
    id: 4,
  },
  {
    inputName: "answers.4",
    label: "5-й вариант ответа",
    id: 5,
  },
]

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
}
const CreateQuestion: FC<CreateQuestionProps> = ({ questionIndex }) => {
  const dispatch = useAppDispatch()
  const question = useAppSelector(
    state => state.newQuizState.questions[questionIndex],
  )

  const answers = question.answers.map(answer => answer)

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { isDirty, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      text: question.text,
      correctAnswerIndex: question.correctAnswerIndex,
      answers: answers,
    },
    resolver: yupResolver(schemaYupToQuestion),
  })

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
    reset()
  }

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
  }, [watch])

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
        {answerFields.map(({ inputName, label, id }) => (
          <Controller
            key={id}
            control={control}
            name={inputName}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                fullWidth
                type="text"
                label={label}
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
                {answerFields.map((field, index) => (
                  <MenuItem
                    key={field.id}
                    value={index}
                  >
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}
      />

      <Typography
        variant="body2"
        component="div"
        color={theme.palette.error.main}
        sx={{ mb: "1rem" }}
      >
        {!isDirty && !isValid && "Заполниете поля для создания теста"}
      </Typography>

      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          fullWidth
          size="small"
          color="primary"
          variant="contained"
          disabled={!isDirty || !isValid}
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
    </div>
  )
}

export default CreateQuestion
