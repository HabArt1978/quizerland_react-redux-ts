import { FC, useState } from "react"

import { ButtonGroupToCreate } from "../../components/CreateQuiz/ButtonGroupToCreate"
import QuestionsScrollableTabs from "../../components/CreateQuiz/QuestionsScrollableTabs/QuestionsScrollableTabs"

import { Container, Typography } from "@mui/material"
import theme from "../../mui-theme"

const CreateQuiz: FC = () => {
  const [questionItem, setQuestionItem] = useState(0)

  return (
    <div
      style={{
        backgroundColor: `rgb(106,196,221)`,
        backgroundImage: `linear-gradient(0deg, rgba(22,22,41,1) 0%, rgba(47,103,102,1) 35%, rgba(106,196,221,1) 100%)`,
        height: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            pt: "3rem",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            color={theme.palette.primary.contrastText}
            gutterBottom
            sx={{ pl: "0.5rem", mb: "1rem" }}
          >
            Создание теста
          </Typography>

          <QuestionsScrollableTabs
            questionItem={questionItem}
            setQuestionItem={setQuestionItem}
          />
          <ButtonGroupToCreate setQuestionItem={setQuestionItem} />
        </Container>
      </Container>
    </div>
  )
}

export default CreateQuiz
