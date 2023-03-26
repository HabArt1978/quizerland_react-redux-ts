import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import theme from "../mui-theme"
import { BackToQuizesButton } from "../components/UI/BackToQuizesButton"
import CssBaseline from "@mui/material/CssBaseline"
import MenuButton from "../components/UI/MenuButton"

const CreateQuiz = () => {
  return (
    <div
      style={{
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.info.main} 0%, ${theme.palette.secondary.main} 100%)`,
        height: "100vh",
      }}
    >
      <CssBaseline />
      <MenuButton />
      <Container maxWidth="md">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            mb: "2rem",
            pt: "7rem",
          }}
        >
          <BackToQuizesButton />
          <Typography
            variant="h5"
            component="h1"
            color="#fff"
            gutterBottom
            sx={{ pl: "0.5rem", mb: 0 }}
          >
            Создать тест
          </Typography>
        </Container>
      </Container>
    </div>
  )
}

export default CreateQuiz
