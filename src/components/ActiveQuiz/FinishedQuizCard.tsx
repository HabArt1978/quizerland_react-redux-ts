import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import { useAppDispatch } from "../../store/hooks"
import { useNavigate } from "react-router-dom"
import {
  resetCurrentQuestionId,
  setActiveQuiz,
  resetRightAttempt,
} from "../../store/quiz/actions"
import { useState } from "react"
import LoadingButton from "../../components/UI/LoadingButton"
import { Quiz } from "../../store/quiz/reducer"

type FinishedQuizCardProps = {
  quiz: Quiz
}

const FinishedQuizCard: React.FC<FinishedQuizCardProps> = ({ quiz }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<"next" | "repeat" | null>(null)

  const repeatQuiz = () => {
    setIsLoading("repeat")

    setTimeout(() => {
      navigate(`/quizes/${quiz.id}`)
      dispatch(resetCurrentQuestionId())
      dispatch(resetRightAttempt())
    }, 1000)
  }

  const toNextQuiz = () => {
    setIsLoading("next")

    setTimeout(() => {
      dispatch(setActiveQuiz(quiz.id + 1))
      navigate(`/quizes/${quiz.id + 1}`)
    }, 1000)
  }

  const rightAnswers = quiz.rightAttempt

  return (
    <Card
      elevation={10}
      sx={{ borderRadius: "10px" }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ mb: "1rem" }}
        >
          Your results on: &nbsp; '{quiz.title}.'
        </Typography>

        <Divider />

        <Box sx={{ width: "100%" }}>
          <List sx={{ mt: "1rem", pb: 0 }}>
            <ListItem>
              <ListItemIcon>
                <CancelIcon color="secondary" />
              </ListItemIcon>
              <ListItemText
                primary={`Wrong attempts : ${
                  quiz.questions.length - rightAnswers
                }`}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={`Right answers : ${rightAnswers}`} />
            </ListItem>
          </List>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          margin: "0 0 1rem 1rem",
        }}
      >
        <LoadingButton
          onClick={repeatQuiz}
          size="medium"
          loading={isLoading === "repeat"}
        >
          repeat quiz
        </LoadingButton>

        <LoadingButton
          onClick={toNextQuiz}
          size="medium"
          loading={isLoading === "next"}
        >
          next quiz
        </LoadingButton>
      </CardActions>
    </Card>
  )
}

export default FinishedQuizCard
