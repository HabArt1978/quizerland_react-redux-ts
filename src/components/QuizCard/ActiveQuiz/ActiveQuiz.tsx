import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CssBaseline from "@mui/material/CssBaseline"

import theme from "../../../mui-theme"
import { BackToQuizesButton } from "../../UI/BackToQuizesButton"
import AnswersRadioGroup from "./AnswersRadioGroup/AnswersRadioGroup"
import { useAppSelector } from "../../../store/hooks"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks"
import { setActiveQuiz } from "../../../store/actions/quizAction"

function ActiveQuiz() {
  const activeQuiz = useAppSelector(({ quizState }) =>
    quizState.quizes.find(quiz => quiz.id === quizState.activeID),
  )
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useAppDispatch()

  const currentQuestionId = activeQuiz?.currentQuestionId
  const questionsLength = activeQuiz?.questions.length

  useEffect(() => {
    if (!currentQuestionId || !questionsLength) return

    if (currentQuestionId > questionsLength) {
      navigate("/finished-quiz")
    }
  }, [currentQuestionId, questionsLength, navigate])

  useEffect(() => {
    dispatch(setActiveQuiz(Number(params.id)))
  }, [params.id, dispatch])

  if (!activeQuiz) {
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

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h1"
                  color={theme.palette.secondary.main}
                  gutterBottom
                  sx={{ pl: "0.5rem", mb: 0 }}
                >
                  Quiz not found !
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Container>
      </div>
    )
  }

  const currentQuestion = activeQuiz.questions.find(
    question => question.id === activeQuiz.currentQuestionId,
  )

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

          <Card
            elevation={10}
            sx={{ minWidth: 275, borderRadius: "12px" }}
          >
            <CardContent>
              {!currentQuestion ? (
                <Typography
                  variant="h5"
                  component="h1"
                  color={theme.palette.secondary.main}
                  gutterBottom
                  sx={{ pl: "0.5rem", mb: 0 }}
                >
                  Current question is not set !
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="h5"
                    component="h1"
                    color="initial"
                    gutterBottom
                    sx={{ pl: "0.5rem" }}
                  >
                    {currentQuestion.text}
                  </Typography>

                  <AnswersRadioGroup
                    answersProp={currentQuestion.answers}
                    questionProp={currentQuestion}
                  />
                </>
              )}
            </CardContent>
          </Card>
        </Container>
      </Container>
    </div>
  )
}

export default ActiveQuiz
