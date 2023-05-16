import { Link } from "react-router-dom"

import { Quiz } from "../store/quiz/types"

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Divider } from "@mui/material"
import theme from "../mui-theme"

type QuizCardProps = {
  quizProp: Quiz
}

export default function QuizCard({ quizProp }: QuizCardProps) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        elevation={7}
        sx={{ borderRadius: "12px", mb: "1rem", mt: "1rem" }}
      >
        <CardContent sx={{ padding: "1rem" }}>
          <Typography
            variant="h5"
            component="h2"
            color="initial"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "0.5rem",
            }}
          >
            {quizProp.title}
          </Typography>

          <Divider />

          <Typography
            variant="subtitle1"
            sx={{ mt: "0.5rem" }}
          >
            {quizProp.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            disrlay: "flex",
            justifyContent: "space-between",
            padding: "0 1rem 1rem 1rem",
          }}
        >
          <span
            style={{
              fontSize: "1rem",
              color: `${theme.palette.grey[500]}`,
              flexShrink: "0",
            }}
          >
            {`тест из ${quizProp.questions.length} вопросов`}
          </span>

          <Link
            to={`/quizes/${quizProp.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              size="small"
              color="primary"
            >
              Перейти к тесту
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  )
}
