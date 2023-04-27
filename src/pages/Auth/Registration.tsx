import Container from "@mui/material/Container"
import { SxProps, Typography } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import HowToRegIcon from "@mui/icons-material/HowToReg"

import theme from "../../mui-theme"
import { Link } from "react-router-dom"
import { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import {
  emailRules,
  passwordRules,
  nameFieldRules,
  notErrorsRules,
} from "./authValidation"

const errorStyles: SxProps = {
  mb: "2rem",
  input: { color: "#f5f5f5" },
  "& .Mui-error": {
    color: theme.palette.error.main,
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.error.main,
  },
}

type RegisterInputType = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

type InputField = {
  inputName: keyof RegisterInputType
  label: string
  required: boolean
  type: string
}
const inputFields: InputField[] = [
  {
    inputName: "name",
    label: "Полное имя",
    type: "text",
    required: true,
  },
  {
    inputName: "email",
    label: "Электронная почта",
    type: "email",
    required: true,
  },
  {
    inputName: "password",
    label: "Пароль",
    type: "password",
    required: true,
  },
  {
    inputName: "confirmPassword",
    label: "Подтвердите пароль",
    type: "password",
    required: true,
  },
]

const getInputRules = (
  name: keyof RegisterInputType,
  watchValue: string = "",
) => {
  const rules = {
    name: () => nameFieldRules,
    email: () => emailRules,
    password: () => passwordRules,
    confirmPassword: (passwordValue: string) => ({
      required: "Поле обязательное для заполнения!",
      validate: (value: string) =>
        value === passwordValue || "Пароли не совпадают!",
    }),
  }

  return rules[name](watchValue) ?? notErrorsRules
}

const RegistrationPage: FC = () => {
  const {
    handleSubmit,
    reset,
    control,
    watch,
    formState: { isDirty, isValid },
  } = useForm<RegisterInputType>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit: SubmitHandler<RegisterInputType> = data => {
    console.log(
      `name: ${data.name}, email: ${data.email}, password: ${data.password}, confirmPassword: ${data.confirmPassword}`,
    )
    reset()
  }

  const password = watch("password", "")
  const watchValuesMap: { [key in keyof RegisterInputType]?: string } = {
    confirmPassword: password,
  }

  return (
    <div
      style={{
        backgroundColor: `rgb(153,162,255)`,
        backgroundImage: `linear-gradient(0deg, rgba(16,16,64,1) 0%, rgba(98,101,162,1) 35%, rgba(153,162,255,1) 100%)`,
        height: "100vh",
      }}
    >
      <CssBaseline />

      <Container maxWidth="sm">
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
            color={theme.palette.grey[100]}
            gutterBottom
            sx={{ pl: "0.5rem", mb: "2rem" }}
          >
            Регистрация
          </Typography>

          {inputFields.map(({ inputName, label, required, type }, index) => (
            <Controller
              key={label + index}
              control={control}
              name={inputName}
              rules={getInputRules(inputName, watchValuesMap[inputName])}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Box
                  sx={{
                    maxWidth: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    fullWidth
                    label={label}
                    type={type ?? "text"}
                    value={value}
                    onChange={event => onChange(event)}
                    required={required}
                    variant="standard"
                    error={!!error}
                    helperText={error?.message}
                    sx={errorStyles}
                  />
                </Box>
              )}
            />
          ))}

          <Typography
            variant="body2"
            component="div"
            color={theme.palette.error.main}
            sx={{ pl: "0.5rem", mb: "2rem" }}
          >
            {!isDirty && !isValid && "Заполниете поля для регистрации"}
          </Typography>

          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={!isDirty || !isValid}
            size="small"
            color="primary"
            variant="contained"
            sx={{ py: 1.5, bgcolor: theme.palette.primary.dark }}
            startIcon={
              <HowToRegIcon
                sx={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            }
          >
            Зарегистрироваться
          </Button>

          <Link
            to="/auth"
            style={{ marginTop: "2rem" }}
          >
            <Button
              size="small"
              variant="text"
              sx={{ textTransform: "initial" }}
            >
              Вернуться на страницу входа
            </Button>
          </Link>
        </Container>
      </Container>
    </div>
  )
}

export default RegistrationPage
