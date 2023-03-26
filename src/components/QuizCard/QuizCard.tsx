import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

const card = (
  <>
    <CardContent sx={{ padding: "1rem" }}>
      <Typography
        variant="h5"
        component="h2"
        color="initial"
        gutterBottom
        sx={{ mb: "1rem" }}
      >
        Super mega quiz
      </Typography>

      <Typography variant="subtitle1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde
        necessitatibus nostrum provident et at debitis libero est.
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        disrlay: "flex",
        justifyContent: "flex-end",
        pr: "1rem",
      }}
    >
      <Link
        to="/active-quiz/:id"
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
  </>
)

export default function QuizCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: "12px", mb: "1rem" }}
      >
        {card}
      </Card>
    </Box>
  )
}
