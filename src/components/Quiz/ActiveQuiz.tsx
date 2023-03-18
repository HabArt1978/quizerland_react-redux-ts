import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import theme from "../../mui-theme"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"

import CheckCircleIcon from "@mui/icons-material/CheckCircle"

import { BackToQuizesButton } from "../UI/BackToQuizesButton"
import AnswersRadioGroup from "../UI/AnswersRadioGroup"

function ActiveQuiz() {
  return (
    <div
      style={{
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.info.main} 0%, ${theme.palette.secondary.main} 100%)`,
        height: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            mb: "2rem",
            pt: "7rem",
          }}
        >
          <BackToQuizesButton />

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="h1"
                color="initial"
                gutterBottom
              >
                What is the capital of Great Britain?
              </Typography>

              <AnswersRadioGroup />
            </CardContent>
            <CardActions
              sx={{
                disrlay: "flex",
                justifyContent: "flex-end",
                pr: "1rem",
                pb: "1rem",
              }}
            >
              <Button
                variant="contained"
                disabled
                startIcon={<CheckCircleIcon />}
              >
                ANSWER
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Container>
    </div>
  )
}

export default ActiveQuiz
