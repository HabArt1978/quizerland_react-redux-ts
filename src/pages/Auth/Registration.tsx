import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import HowToRegIcon from "@mui/icons-material/HowToReg"

import theme from "../../mui-theme"
import { Link } from "react-router-dom"

type InputField = {
  label: string
  required: boolean
  type?: string
}

const RegistrationPage = () => {
  const inputFields: InputField[] = [
    {
      label: "Фамилия",
      required: true,
    },
    {
      label: "Имя",
      required: true,
    },
    {
      label: "Отчество",
      required: false,
    },
    {
      label: "Электронная почта",
      type: "email",
      required: true,
    },
    {
      label: "Пароль",
      type: "password",
      required: true,
    },
    {
      label: "Подтвердите пароль",
      type: "password",
      required: true,
    },
  ]

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

          {inputFields.map(field => (
            <Box
              sx={{
                maxWidth: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                fullWidth
                label={field.label}
                type={field.type ?? "text"}
                id="fullWidth"
                required={field.required}
                variant="standard"
                error
                helperText="Неверный ввод."
                sx={{
                  mb: "2rem",
                  input: { color: "#f5f5f5" },
                  "& .Mui-error": {
                    color: theme.palette.error.contrastText,
                  },
                  "& .MuiFormHelperText-root": {
                    color: theme.palette.error.contrastText,
                  },
                }}
              />
            </Box>
          ))}

          <Button
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
