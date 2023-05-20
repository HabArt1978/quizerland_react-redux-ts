import { useAppSelector, useAppDispatch } from "../../../store/hooks"
import { FC } from "react"

import CreateQuestion from "./CreateQuestion/CreateQuestion"
import CreateQuizCard from "./CreateQuestion/CreateQuizCard"
import { removeQuestion } from "../../../store/newQuiz/actions"

import { Box, IconButton, Tab } from "@mui/material"
import Tabs, { tabsClasses } from "@mui/material/Tabs"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import theme from "../../../mui-theme"

interface QestionItemProps {
  questionItem: number
  setQuestionItem: React.Dispatch<React.SetStateAction<number>>
  setIsValidFormCard: React.Dispatch<React.SetStateAction<boolean>>
  setIsValidCreateQuestion: React.Dispatch<React.SetStateAction<boolean>>
}

const QuestionsScrollableTabs: FC<QestionItemProps> = ({
  questionItem,
  setQuestionItem,
  setIsValidFormCard,
  setIsValidCreateQuestion,
}) => {
  const newQuiz = useAppSelector(store => store.newQuizState)
  const dispatch = useAppDispatch()

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

      {questionItem === 0 ? (
        <CreateQuizCard setIsValidFormCard={setIsValidFormCard} />
      ) : (
        <CreateQuestion
          key={questionItem + 1}
          questionIndex={questionItem - 1}
          setIsValidCreateQuestion={setIsValidCreateQuestion}
        />
      )}
    </Box>
  )
}

export default QuestionsScrollableTabs
