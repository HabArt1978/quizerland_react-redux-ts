import { useAppSelector } from "../../store/hooks"

import WelcomeText from "../../components/WelcomeText"
import QuizCard from "../../components/QuizCard"

import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../../mui-theme"

function QuizList() {
  const quizList = useAppSelector(({ quizState }) => quizState.quizes)

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
            overflowY: "auto",
          }}
        >
          {quizList.map(quiz => (
            <QuizCard
              key={quiz.id}
              quizProp={quiz}
            />
          ))}
        </Container>
      </Container>
    </div>
  )
}

export default QuizList
