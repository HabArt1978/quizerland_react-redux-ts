import { Card, CardContent, LinearProgress, Typography } from "@mui/material"
import AnswersRadioGroup from "./AnswersRadioGroup"
import theme from "../../mui-theme"
import { useAppSelector } from "../../store/hooks"
import { currentQuestionSelector } from "../../store/quiz/selectors"
import { Quiz } from "../../store/quiz/types"
import { FC, useState } from "react"

type ActiveQuizCardProps = {
  quiz: Quiz
}

const ActiveQuizCard: FC<ActiveQuizCardProps> = ({ quiz }) => {
  const currentQuestion = useAppSelector(currentQuestionSelector)
  const [progress, setProgress] = useState(
    ((quiz.currentQuestionId - 1) / quiz.questions.length) * 100,
  )

  const onRightAnswer = () => {
    setProgress((quiz.currentQuestionId / quiz.questions.length) * 100)
  }

  return (
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
            Вопрос потерялся!
          </Typography>
        ) : (
          <>
            <Typography
              variant="h5"
              component="h1"
              color="initial"
              gutterBottom
              sx={{
                display: "flex",
                justifyContent: "space-between",
                pl: "0.5rem",
                mb: "1rem",
              }}
            >
              {currentQuestion.text}
            </Typography>

            <LinearProgress
              color="info"
              variant="determinate"
              value={progress}
            />

            <AnswersRadioGroup
              questionProp={currentQuestion}
              activeQuizProp={quiz}
              handleRightAnswer={onRightAnswer}
            />
          </>
        )}
      </CardContent>
    </Card>
  )
}
export default ActiveQuizCard
