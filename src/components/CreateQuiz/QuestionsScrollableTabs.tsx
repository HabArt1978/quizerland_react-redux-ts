import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../store/hooks"

import CreateQuestion from "./CreateQuestion"
import CreateQuizCard from "./CreateQuizCard"
import { removeQuestion } from "../../store/newQuiz/actions"

import { Box, IconButton, Tab } from "@mui/material"
import Tabs, { tabsClasses } from "@mui/material/Tabs"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import theme from "../../mui-theme"

export default function QuestionsScrollableTabs() {
  const newQuiz = useAppSelector(store => store.newQuizState)
  const dispatch = useAppDispatch()

  const [questionItem, setQuestionItem] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setQuestionItem(newValue)
  }

  const closeTab = (index: number) => {
    const onLastTab = newQuiz.questions.length === questionItem
    if (onLastTab) {
      setQuestionItem(questionItem - 1)
    }

    dispatch(removeQuestion({ index }))
  }

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
            label={
              <span
                style={{
                  paddingTop: "0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {`Вопрос №${index + 1}`}
                {index > 0 && (
                  <IconButton
                    size="small"
                    component="span"
                    sx={{ ml: "0.3rem", p: "0" }}
                    onClick={e => {
                      e.stopPropagation()
                      closeTab(index)
                    }}
                  >
                    <DeleteOutlineIcon
                      viewBox="0 0 24 24"
                      sx={{
                        "&:hover": { color: theme.palette.secondary.dark },
                      }}
                    />
                  </IconButton>
                )}
              </span>
            }
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
        return []
      })}
    </Box>
  )
}
