import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Quiz } from "../../store/reducers/quizReducer"
import { Link } from "react-router-dom"

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
            sx={{ mb: "1rem" }}
          >
            {quizProp.title}
          </Typography>

          <Typography variant="subtitle1">{quizProp.description}</Typography>
        </CardContent>
        <CardActions
          sx={{
            disrlay: "flex",
            justifyContent: "flex-end",
            pr: "1rem",
          }}
        >
          <Link
            to={`/active-quiz/${quizProp.id}`}
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
