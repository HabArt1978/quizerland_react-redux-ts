import { useState } from "react"
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
import Select, { SelectChangeEvent } from "@mui/material/Select"
import theme from "../mui-theme"

type InputField = {
  label: string
  id: number
}

const CreateQuiz = () => {
  const [age, setAge] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  const inputAnswersFields: InputField[] = [
    {
      label: "1-й вариант ответа",
      id: 1,
    },
    {
      label: "2-й вариант ответа",
      id: 2,
    },
    {
      label: "3-й вариант ответа",
      id: 3,
    },
    {
      label: "4-й вариант ответа",
      id: 4,
    },
    {
      label: "5-й вариант ответа",
      id: 5,
    },
  ]
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

          <TextField
            fullWidth
            type="text"
            label="Введите текст вопроса"
            required
            variant="outlined"
            // error
            // helperText="Неверный ввод."
            sx={{
              pb: "2rem",
              // цвет текста input
              input: { color: `${theme.palette.info.contrastText}` },
              // цвет label по умолчанию
              "& .MuiInputLabel-root": {
                color: theme.palette.info.contrastText,
              },
              // цвет label при активации input
              "& .MuiInputLabel-root:hover": {
                color: theme.palette.primary.dark,
              },
              // цвет рамки Input по умолчанию
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  border: `1px solid ${theme.palette.info.contrastText}`,
                },
              },
              // цвет рамки Input при наведении
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  border: `2px solid ${theme.palette.primary.dark}`,
                },
              },
            }}
          />

          <Container>
            {inputAnswersFields.map(field => (
              <TextField
                key={field.id}
                fullWidth
                type="text"
                label={field.label}
                required
                variant="filled"
                InputProps={{ disableUnderline: true }}
                // error
                // helperText="Неверный ввод."
                sx={{
                  mb: "1rem",
                  input: { color: "#f5f5f5" },
                  "& .MuiInputLabel-root": {
                    color: theme.palette.info.contrastText,
                  },
                  "& .MuiInputLabel-root:hover": {
                    color: theme.palette.primary.dark,
                  },

                  "& .MuiFilledInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            ))}
          </Container>

          <div>
            <FormControl
              sx={{
                minWidth: 270,
                mt: "1rem",
                mb: "3rem",
                "& .MuiInputLabel-root": {
                  color: theme.palette.info.contrastText,
                },
                "& .MuiInputLabel-root:hover": {
                  color: theme.palette.primary.dark,
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: `1px solid ${theme.palette.info.contrastText}`,
                  },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    border: `2px solid ${theme.palette.primary.dark}`,
                  },
                },
              }}
            >
              <InputLabel id="autowidth-label">
                Выберите правильный ответ
              </InputLabel>
              <Select
                labelId="autowidth-label"
                id="select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Выберите правильный ответ"
                sx={{
                  color: "#f5f5f5",
                }}
              >
                {inputAnswersFields.map(field => (
                  <MenuItem
                    key={field.id}
                    value={field.label}
                  >
                    {field.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              fullWidth
              size="small"
              color="primary"
              variant="contained"
              sx={{ py: 1.5, bgcolor: theme.palette.primary.dark }}
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
