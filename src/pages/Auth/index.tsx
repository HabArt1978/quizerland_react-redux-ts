import Container from "@mui/material/Container"
import { IconButton, Typography } from "@mui/material"
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import LockIcon from "@mui/icons-material/Lock"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import InputOutlinedIcon from "@mui/icons-material/InputOutlined"
import { useState } from "react"
import theme from "../../mui-theme"
import { Link } from "react-router-dom"
import { allowEmpty, validateEmail, validatePassword } from "./authValidation"

const AuthPage = () => {
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const isValidEmail = allowEmpty(emailValue) || validateEmail(emailValue)
  const isValidPassword =
    allowEmpty(passwordValue) || validatePassword(passwordValue)

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
            Авторизация
          </Typography>

          <Box
            sx={{
              maxWidth: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AlternateEmailIcon sx={{ color: "action.active", mr: 1, mb: 2 }} />
            <TextField
              fullWidth
              label="Электронная почта"
              type="email"
              id="fullWidth"
              required
              value={emailValue}
              onChange={event => setEmailValue(event.currentTarget.value)}
              variant="standard"
              error={!isValidEmail}
              helperText={!isValidEmail && "Неверный ввод."}
              sx={{
                mb: "2rem",
                input: { color: "#f5f5f5" },
                "& .Mui-error": {
                  color: theme.palette.error.main,
                },
                "& .MuiFormHelperText-root": {
                  color: theme.palette.error.main,
                },
              }}
            />
          </Box>
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
              type={showPassword ? "text" : "password"}
              value={passwordValue}
              onChange={event => setPasswordValue(event.currentTarget.value)}
              id="standard-password-input"
              autoComplete="current-password"
              required
              error={!isValidPassword}
              helperText={!isValidPassword && "Неверный ввод."}
              variant="standard"
              sx={{
                mb: "2rem",
                input: { color: "#f5f5f5" },
                "& .Mui-error": {
                  color: theme.palette.error.main,
                },
                "& .MuiFormHelperText-root": {
                  color: theme.palette.error.main,
                },
              }}
            />

            <IconButton
              onClick={handleClickShowPassword}
              sx={{ mb: 1.5 }}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </Box>

          <Button
            size="small"
            variant="contained"
            sx={{ py: 1.5, bgcolor: theme.palette.primary.dark }}
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
