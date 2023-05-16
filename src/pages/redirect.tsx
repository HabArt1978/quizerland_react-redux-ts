import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

import WelcomeText from "../components/WelcomeText"

import CssBaseline from "@mui/material/CssBaseline"
import { Container } from "@mui/material"
import theme from "../mui-theme"

function RedirectPage() {
  const navigate = useNavigate()

  useEffect(() => navigate("/quizes"), [navigate])

  return (
    <div
      style={{
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: `linear-gradient(0deg, ${theme.palette.info.main} 0%, ${theme.palette.secondary.main} 100%)`,
        height: "100vh",
      }}
    >
      <CssBaseline />
      <Container maxWidth="md">
        <WelcomeText />
      </Container>
    </div>
  )
}

export default RedirectPage
