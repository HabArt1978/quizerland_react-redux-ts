import useMediaQuery from "@mui/material/useMediaQuery"

import Container from "@mui/material/Container"
import { SxProps, Typography } from "@mui/material"
import theme from "../mui-theme"

function WelcomeText() {
  const isMobile = useMediaQuery("(max-width:745px)")

  const containerStyles: SxProps = {
    mb: "2rem",
    display: "flex",
    justifyContent: "center",
  }

  let titleStyles: SxProps = {
    display: "flex",
    justifyContent: "center",
    fontSize: "2.4rem",
    fontWeight: "bold",
    pt: "7rem",
    textAlign: "center",
  }

  if (isMobile) {
    // На телефонах меньше паддинг сверху
    titleStyles.pt = "3.4rem"
  }

  return (
    <Container sx={containerStyles}>
      <Typography
        component="h1"
        color="white"
        sx={titleStyles}
      >
        <span>
          Добро пожаловать в &nbsp;
          <span
            style={{
              fontSize: "3rem",
              fontFamily: "Pacifico",
              color: theme.palette.primary.main,
            }}
          >
            Quizerland
          </span>
        </span>
      </Typography>
    </Container>
  )
}

export default WelcomeText
