import { FC } from "react"
import Container from "@mui/material/Container"
import { FormHelperText, Typography } from "@mui/material"
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
import { textFieldRules } from "./createValidation"
import {
  questionFieldStyle,
  answersFieldStyle,
  selectFieldStyle,
} from "./style"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

type CreateInputType = {
  question: string
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  answer5: string
  select: string
}

type AnswerField = {
  inputName: keyof CreateInputType
  label: string
  id: number
}
const answerFields: AnswerField[] = [
  {
    inputName: "answer1",
    label: "1-й вариант ответа",
    id: 1,
  },
  {
    inputName: "answer2",
    label: "2-й вариант ответа",
    id: 2,
  },
  {
    inputName: "answer3",
    label: "3-й вариант ответа",
    id: 3,
  },
  {
    inputName: "answer4",
    label: "4-й вариант ответа",
    id: 4,
  },
  {
    inputName: "answer5",
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
  } = useForm<CreateInputType>({
    mode: "onChange",
    defaultValues: {
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      select: "",
    },
  })

  const onSubmit: SubmitHandler<CreateInputType> = data => {
    console.log(data)
    reset()
  }

  return (
    <div
      style={{
        backgroundColor: `rgb(106,196,221)`,
        backgroundImage: `linear-gradient(0deg, rgba(22,22,41,1) 0%, rgba(47,103,102,1) 35%, rgba(106,196,221,1) 100%)`,
        height: "100vh",
      }}
    >
      <CssBaseline />

      <Container maxWidth="md">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            mb: "2rem",
            pt: "7rem",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            color={theme.palette.primary.contrastText}
            gutterBottom
            sx={{ pl: "0.5rem", mb: "4rem" }}
          >
            Создание теста
          </Typography>

          <Controller
            control={control}
            name="question"
            rules={textFieldRules}
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
                rules={textFieldRules}
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
            rules={{ required: "Поле обязательное для заполнения!" }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
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
                  <FormHelperText>{error?.message}</FormHelperText>
                </FormControl>
              </div>
            )}
          />

          <Typography
            variant="body2"
            component="div"
            color={theme.palette.error.main}
            sx={{ pl: "0.5rem", mb: "2rem" }}
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
