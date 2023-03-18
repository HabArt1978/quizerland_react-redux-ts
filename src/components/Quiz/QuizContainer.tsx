import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import QuizCard from "./QuizCard"

export default function QuizContainer() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          maxHeight: "700px",
          overflowY: "scroll",
        }}
      >
        <Box
          component="div"
          sx={{
            bgcolor: "transparent",
          }}
        >
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </Box>
      </Container>
    </>
  )
}
