import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"
import { CircularProgress, Container } from "@mui/material"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import { BackToQuizesButton } from "../UI/BackToQuizesButton"
import { useAppDispatch } from "../../store/hooks"
import { useNavigate } from "react-router"
import { useAppSelector } from "../../store/hooks"
import {
  resetCurrentQuestionId,
  toNextQuiz,
} from "../../store/actions/quizAction"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import { useState } from "react"
import LoadingButton from "../UI/LoadingButton"

export default function FinishedQuiz() {
  const activeQuiz = useAppSelector(({ quizState }) =>
    quizState.quizes.find(quiz => quiz.id === quizState.activeID),
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<"next" | "repeat" | null>(null)

  if (!activeQuiz) {
    return <NotFoundPage />
  }

  const repeatQuiz = () => {
    setIsLoading("repeat")

    setTimeout(() => {
      navigate(`/active-quiz/${activeQuiz.id}`)
      dispatch(resetCurrentQuestionId())
    }, 1000)
  }

  const toTheNextQuiz = () => {
    setIsLoading("next")

    setTimeout(() => {
      dispatch(toNextQuiz())
      navigate(`/active-quiz/${activeQuiz.id + 1}`)
    }, 1000)
  }

  return (
    <div
      style={{
        backgroundColor: `rgb(238,174,202)`,
        backgroundImage: `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`,
        height: "100vh",
      }}
    >
      <CssBaseline />

      <Container
        maxWidth="md"
        sx={{ pt: "7rem" }}
      >
        <BackToQuizesButton />

        <Card
          elevation={10}
          sx={{ borderRadius: "10px" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Your results on: &nbsp; '{activeQuiz.title}.'
            </Typography>
            <Box sx={{ width: "100%" }}>
              <List sx={{ margin: "1rem 0" }}>
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={`Wrong attempts : ${0}`} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary={`Right answers : ${0}`} />
                </ListItem>
              </List>

              <Divider />
            </Box>
          </CardContent>
          <CardActions sx={{ margin: "0 0 1rem 1rem" }}>
            <LoadingButton
              onClick={repeatQuiz}
              size="medium"
              loading={isLoading === "repeat"}
            >
              repeat quiz
            </LoadingButton>

            <LoadingButton
              onClick={toTheNextQuiz}
              size="medium"
              loading={isLoading === "next"}
            >
              next quiz
            </LoadingButton>
          </CardActions>
        </Card>
      </Container>
    </div>
  )
}
