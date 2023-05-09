import { useState } from "react"
import { Box, Tab } from "@mui/material"
import Tabs, { tabsClasses } from "@mui/material/Tabs"
import CreateQuestion from "./CreateQuestion"
import CreateQuizCard from "./CreateQuizCard"

import { useAppSelector } from "../../store/hooks"

export default function QuestionsScrollableTabs() {
  const newQuiz = useAppSelector(store => store.newQuizState)

  const [questionItem, setQuestionItem] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setQuestionItem(newValue)
  }

  const addQuestion = () => {}

  return (
    <Box>
      <Tabs
        value={questionItem}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        <Tab
          label="Описание теста"
          sx={{ fontWeight: "700" }}
        />

        {newQuiz.questions.map((question, index) => (
          <Tab
            key={question.text + index}
            label={"Вопрос " + (index + 1)}
          />
        ))}
      </Tabs>
      {questionItem === 0 && <CreateQuizCard />}

      {newQuiz.questions.map((_, index) => {
        if (questionItem === index + 1) {
          return (
            <CreateQuestion
              key={questionItem + index}
              questionIndex={questionItem - 1}
            />
          )
        }
      })}
    </Box>
  )
}
