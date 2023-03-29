import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import { BackToQuizesButton } from "../components/UI/BackToQuizesButton"
import CssBaseline from "@mui/material/CssBaseline"

const CreateQuiz = () => {
  return (
    <div
      style={{
        backgroundColor: `rgb(22,22,41)`,
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
