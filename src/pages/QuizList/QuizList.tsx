import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"

import theme from "../../mui-theme"
import MenuButton from "../../components/UI/MenuButton"
import WelcomeText from "./WelcomeText"
import QuizCard from "../../components/QuizCard/QuizCard"
import ActiveQuiz from "../../components/QuizCard/ActiveQuiz/ActiveQuiz"

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
      <MenuButton />
      <ActiveQuiz />

      {/* <Container maxWidth="md">
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
      </Container> */}
    </div>
  )
}

export default QuizList
