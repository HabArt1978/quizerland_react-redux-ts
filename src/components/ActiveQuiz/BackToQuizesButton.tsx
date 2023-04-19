import { Button } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { Link } from "react-router-dom"

export function BackToQuizesButton() {
  return (
    <Link
      to="/quizes"
      style={{ textDecoration: "none", color: "white" }}
    >
      <Button sx={{ alignSelf: "start", mb: "1rem" }}>
        <ArrowBackIosIcon />
        Вернуться к списку тестов
      </Button>
    </Link>
  )
}
