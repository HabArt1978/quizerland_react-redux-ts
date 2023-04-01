import { Button } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { resetCurrentQuestionId } from "../../store/actions/quizAction"

export function BackToQuizesButton() {
  const dispatch = useAppDispatch()

  return (
    <Link
      to="/"
      style={{ textDecoration: "none", color: "white" }}
    >
      <Button
        onClick={() => dispatch(resetCurrentQuestionId())}
        sx={{ alignSelf: "start", mb: "1rem" }}
      >
        <ArrowBackIosIcon />
        BACK TO QUIZES LIST
      </Button>
    </Link>
  )
}
