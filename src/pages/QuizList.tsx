import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../mui-theme"
import WelcomeText from "../components/QuizCard/WelcomeText/WelcomeText"
import QuizCard from "../components/QuizCard/QuizCard"

function QuizList() {
  return (
    <div
      style={{
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.info.main} 0%, ${theme.palette.secondary.main} 100%)`,
        height: "100vh",
      }}
    >
      <CssBaseline />

      <Container maxWidth="md">
        <WelcomeText />

        <Container
          sx={{
            maxHeight: "700px",
            overflowY: "scroll",
          }}
        >
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </Container>
      </Container>
    </div>
  )
}

export default QuizList