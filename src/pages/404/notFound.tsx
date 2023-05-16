import { BackToQuizesButton } from "../../components/ActiveQuiz/BackToQuizesButton"
import NotFoundSvg from "./svg"

import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"

const NotFoundPage = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(35,35,51)",
        backgroundImage: `linear-gradient(0deg, rgba(35,35,51,1) 0%, rgba(97,97,121,1) 35%, rgba(166,170,171,1) 100%)`,
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
            pt: "10rem",
          }}
        >
          <div
            style={{
              marginBottom: "-10rem",
            }}
          >
            <BackToQuizesButton />
          </div>

          <NotFoundSvg />
        </Container>
      </Container>
    </div>
  )
}

export default NotFoundPage
