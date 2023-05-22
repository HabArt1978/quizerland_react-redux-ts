import { Link } from "react-router-dom"
import { FC, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import Container from "@mui/material/Container"
import { FormHelperText, Typography } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import HowToRegIcon from "@mui/icons-material/HowToReg"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import Input from "@mui/material/Input"
import theme from "../../mui-theme"

import { buttonStyle, fieldStyles } from "./styles"

import { registrationSchema } from "./authValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormData = yup.InferType<typeof registrationSchema>

type InputField = {
  inputName: keyof FormData
  label: string
  placeholder: string
  required: boolean
  type: string
}
const inputFields: InputField[] = [
  {
    inputName: "name",
    label: "Полное имя",
    placeholder: "Фамилия Имя Отчество",
    type: "text",
    required: true,
  },
  {
    inputName: "email",
    label: "Электронная почта",
    placeholder: "test@test.ru",
    type: "email",
    required: true,
  },
  {
    inputName: "password",
    label: "Пароль",
    placeholder: "Не менее 8 символов и не более 32",
    type: "password",
    required: true,
  },
  {
    inputName: "confirmPassword",
    label: "Подтвердите пароль",
    placeholder: "Повторите пароль",
    type: "password",
    required: true,
  },
]

const RegistrationPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show)

  const {
    handleSubmit,
    reset,
    control,
    formState: { isDirty, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registrationSchema),
  })

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
    reset()
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

          {inputFields.map(
            ({ inputName, label, required, type, placeholder }, index) => (
              <Controller
                key={label + index}
                control={control}
                name={inputName}
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
                    {inputName === "name" || inputName === "email" ? (
                      <TextField
                        fullWidth
                        label={label}
                        type={type}
                        value={value}
                        onChange={event => onChange(event)}
                        required={required}
                        placeholder={placeholder}
                        variant="standard"
                        error={!!error}
                        helperText={error?.message}
                        sx={fieldStyles}
                      />
                    ) : (
                      <FormControl
                        sx={fieldStyles}
                        variant="standard"
                        error={!!error}
                        required={required}
                      >
                        <InputLabel htmlFor="standard-adornment-password">
                          {label}
                        </InputLabel>
                        {inputName === "password" ? (
                          <Input
                            id="standard-adornment-password"
                            fullWidth
                            value={value}
                            onChange={event => onChange(event)}
                            placeholder={placeholder}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onMouseDown={handleClickShowPassword}
                                  onMouseUp={handleClickShowPassword}
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        ) : (
                          <Input
                            id="standard-adornment-password"
                            fullWidth
                            value={value}
                            onChange={event => onChange(event)}
                            placeholder={placeholder}
                            type={showConfirmPassword ? "text" : "password"}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onMouseDown={handleClickShowConfirmPassword}
                                  onMouseUp={handleClickShowConfirmPassword}
                                >
                                  {showConfirmPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        )}
                        <FormHelperText>{error?.message}</FormHelperText>
                      </FormControl>
                    )}
                  </Box>
                )}
              />
            ),
          )}

          <Typography
            variant="body2"
            component="div"
            gutterBottom
            color={theme.palette.error.main}
            sx={{ mb: "2rem" }}
          >
            {!isDirty && !isValid && "Заполниете поля для регистрации!"}
          </Typography>

          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={!isDirty || !isValid}
            size="small"
            color="primary"
            variant="contained"
            sx={buttonStyle}
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
