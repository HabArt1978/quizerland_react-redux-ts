import { FC, useState } from "react"
import { Link } from "react-router-dom"
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import Container from "@mui/material/Container"
import { Alert, IconButton, Typography } from "@mui/material"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import LockIcon from "@mui/icons-material/Lock"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import InputOutlinedIcon from "@mui/icons-material/InputOutlined"
import theme from "../../mui-theme"

import { buttonStyle, fieldStyles, alertErrorStyle } from "./styles"

import api from "../../api"

import { loginSchema } from "./authValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormData = yup.InferType<typeof loginSchema>

const AuthPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [queryError, setQueryError] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const {
    handleSubmit,
    reset,
    control,
    formState: { isDirty, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      await api.auth.login(data)

      reset()
    } catch (error: any) {
      if (error.response.status === 422) {
        setQueryError(true)
        setTimeout(() => {
          setQueryError(false)
        }, 3000)
      }
    }
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
            sx={{ pl: "0.5rem", mb: "2rem" }}
          >
            Авторизация
          </Typography>

          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Box
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AlternateEmailIcon
                  sx={{ color: "action.active", mr: 1, mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Электронная почта"
                  placeholder="test@test.ru"
                  type="email"
                  id="emailID"
                  required
                  value={value}
                  onChange={event => onChange(event)}
                  variant="standard"
                  error={!!error}
                  helperText={error?.message}
                  sx={fieldStyles}
                />
              </Box>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Box
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LockIcon sx={{ color: "action.active", mr: 1, mb: 2 }} />
                <TextField
                  fullWidth
                  label="Пароль"
                  placeholder="Ваш пароль для входа"
                  type={showPassword ? "text" : "password"}
                  value={value}
                  onChange={event => onChange(event)}
                  id="passwordID"
                  autoComplete="current-password"
                  required
                  error={!!error}
                  helperText={error?.message}
                  variant="standard"
                  sx={fieldStyles}
                />

                <IconButton
                  onMouseDown={handleClickShowPassword}
                  onMouseUp={handleClickShowPassword}
                  sx={{ mb: 1.5 }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </Box>
            )}
          />

          <Typography
            variant="body2"
            component="div"
            color={theme.palette.error.main}
            sx={{ mb: "2rem" }}
          >
            {!isDirty && !isValid && "Заполниете поля для авторизации!"}
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
              <InputOutlinedIcon
                sx={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            }
          >
            Вход
          </Button>

          {queryError && (
            <Alert
              severity="error"
              variant="filled"
              sx={alertErrorStyle}
            >
              <b>Неверный логин и/или пароль!</b>
            </Alert>
          )}

          <Link
            to="/registration"
            style={{ marginTop: "2rem" }}
          >
            <Button
              size="small"
              variant="text"
              sx={{ textTransform: "initial" }}
            >
              Нет аккаунта? Заведите новый
            </Button>
          </Link>
        </Container>
      </Container>
    </div>
  )
}

export default AuthPage
