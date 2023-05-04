import { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import LibraryAddIcon from "@mui/icons-material/LibraryAdd"
import SaveAsIcon from "@mui/icons-material/SaveAs"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import theme from "../../../mui-theme"
import QuestionsScrollableTabs from "./QuestionsScrollableTabs"

import {
  questionFieldStyle,
  answersFieldStyle,
  selectFieldStyle,
} from "./style"

import { schemaYup } from "./createValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormData = yup.InferType<typeof schemaYup>

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

const CreateQuiz: FC = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isDirty, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      question: "",
      answers: ["", "", "", "", ""],
      select: "",
    },
    resolver: yupResolver(schemaYup),
  })

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
    reset()
  }

  return (
    <div
      style={{
        backgroundColor: `rgb(106,196,221)`,
        backgroundImage: `linear-gradient(0deg, rgba(22,22,41,1) 0%, rgba(47,103,102,1) 35%, rgba(106,196,221,1) 100%)`,
        height: "100vh",
        // backgroundImage: `url(${svgBackground})`,
        // height: "100vh",
      }}
    >
      <CssBaseline />

      <Container maxWidth="md">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            pt: "4rem",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            color={theme.palette.primary.contrastText}
            gutterBottom
            sx={{ pl: "0.5rem", mb: "1rem" }}
          >
            Создание теста
          </Typography>

          <QuestionsScrollableTabs />

          <Controller
            control={control}
            name="question"
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
                sx={questionFieldStyle}
              />
            )}
          />

          <Container>
            {answerFields.map(({ inputName, label, id }) => (
              <Controller
                key={id}
                control={control}
                name={inputName}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
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
            name="select"
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
                      color: "#f5f5f5",
                    }}
                  >
                    {answerFields.map(field => (
                      <MenuItem
                        key={field.id}
                        value={field.label}
                      >
                        {field.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {/* {!value && (
                    <FormHelperText
                      sx={{ color: theme.palette.secondary.main }}
                    >
                      * Поле обязательное для заполнения!
                    </FormHelperText>
                  )} */}
                </FormControl>
              </div>
            )}
          />

          <Typography
            variant="body2"
            component="div"
            color={theme.palette.error.main}
            sx={{ pl: "0.5rem", mb: "1rem" }}
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
        </Container>
      </Container>
    </div>
  )
}

export default CreateQuiz
