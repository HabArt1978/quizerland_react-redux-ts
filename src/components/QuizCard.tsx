import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Quiz } from "../store/quiz/reducer"
import { Link } from "react-router-dom"
import theme from "../mui-theme"
import { Divider } from "@mui/material"

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
            {quizProp.questions.length + "  questions"}
          </span>

          <Link
            to={`/quizes/${quizProp.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              size="small"
              color="primary"
            >
              TO THE QUIZ
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  )
}
