import { Button } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

export function BackToQuizesButton() {
  return (
    <Button sx={{ alignSelf: "start", mb: "1rem" }}>
      <ArrowBackIosIcon />
      BACK TO QUIZES LIST
    </Button>
  )
}
