import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import { BackToQuizesButton } from "../components/UI/BackToQuizesButton"
import CssBaseline from "@mui/material/CssBaseline"

const Auth = () => {
  return (
    <div
      style={{
        backgroundColor: `rgb(16,16,64)`,
        backgroundImage: `linear-gradient(0deg, rgba(16,16,64,1) 0%, rgba(98,101,162,1) 35%, rgba(153,162,255,1) 100%)`,
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
            mb: "2rem",
            pt: "7rem",
          }}
        >
          <BackToQuizesButton />
          <Typography
            variant="h5"
            component="h1"
            color="#fff"
            gutterBottom
            sx={{ pl: "0.5rem", mb: 0 }}
          >
            Авторизация
          </Typography>
        </Container>
      </Container>
    </div>
  )
}

export default Auth
