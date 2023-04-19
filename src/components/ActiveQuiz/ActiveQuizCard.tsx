import { Card, CardContent, Divider, Typography } from "@mui/material"
import AnswersRadioGroup from "./AnswersRadioGroup"
import theme from "../../mui-theme"
import { useAppSelector } from "../../store/hooks"
import { currentQuestionSelector } from "../../store/quiz/selectors"
import { Quiz } from "../../store/quiz/types"

type ActiveQuizCardProps = {
  quiz: Quiz
}

const ActiveQuizCard: React.FC<ActiveQuizCardProps> = ({ quiz }) => {
  const currentQuestion = useAppSelector(currentQuestionSelector)

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

            <Divider />

            <AnswersRadioGroup
              questionProp={currentQuestion}
              activeQuizProp={quiz}
            />
          </>
        )}
      </CardContent>
    </Card>
  )
}
export default ActiveQuizCard
