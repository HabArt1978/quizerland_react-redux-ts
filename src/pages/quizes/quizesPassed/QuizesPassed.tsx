import Container from "@mui/material/Container"
import { BackToQuizesButton } from "../../../components/ActiveQuiz/BackToQuizesButton"
import CssBaseline from "@mui/material/CssBaseline"
import PassedSvg from "./svg"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import theme from "../../../mui-theme"

const QuizesPassed = () => {
  return (
    <div
      style={{
        backgroundColor: theme.palette.info.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.info.main} 0%, ${theme.palette.secondary.main} 100%)`,
        height: "100vh",
      }}
    >
      <CssBaseline />

      <Container maxWidth="md">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            pt: "5rem",
          }}
        >
          <div
            style={{
              marginBottom: "-5rem",
            }}
          >
            <BackToQuizesButton />
          </div>

          <PassedSvg />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h3"
              component="h1"
              color={theme.palette.primary.dark}
              sx={{ mt: "-8rem", "z-index": 1 }}
            >
              Все тесты пройдены!
            </Typography>
          </Box>
        </Container>
      </Container>
    </div>
  )
}

export default QuizesPassed
