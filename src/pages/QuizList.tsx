import Container from "@mui/material/Container"
import theme from "../mui-theme"
import WelcomeText from "../components/Quiz/WelcomeText"
import QuizContainer from "../components/Quiz/QuizContainer"

function QuizList() {
  return (
    <div
      style={{
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.info.main} 0%, ${theme.palette.secondary.main} 100%)`,
        height: "100vh",
      }}
    >
      <Container maxWidth="md">
        <WelcomeText />
        <QuizContainer />
      </Container>
    </div>
  )
}

export default QuizList
