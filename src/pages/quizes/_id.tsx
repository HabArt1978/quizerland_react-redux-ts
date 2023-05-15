import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../../mui-theme"
import { BackToQuizesButton } from "../../components/ActiveQuiz/BackToQuizesButton"
import { useAppSelector } from "../../store/hooks"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { setActiveQuiz } from "../../store/quiz/actions"
import { activeQuizSelector } from "../../store/quiz/selectors"
import ActiveQuizCard from "../../components/ActiveQuiz/ActiveQuizCard/ActiveQuizCard"
import FinishedQuizCard from "../../components/ActiveQuiz/FinishedQuizCard"

function ActiveQuiz() {
  const activeQuiz = useAppSelector(activeQuizSelector)
  const dispatch = useAppDispatch()

  const params = useParams()

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
                  Quiz not found!
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Container>
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: activeQuiz.isFinished
          ? `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`
          : `linear-gradient(0deg, ${theme.palette.info.main} 0%, ${theme.palette.secondary.main} 100%)`,
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

          {activeQuiz.isFinished ? (
            <FinishedQuizCard quiz={activeQuiz} />
          ) : (
            <ActiveQuizCard quiz={activeQuiz} />
          )}
        </Container>
      </Container>
    </div>
  )
}

export default ActiveQuiz
