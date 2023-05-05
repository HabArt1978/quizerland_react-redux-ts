import { useState } from "react"
import Box from "@mui/material/Box"
import Tabs, { tabsClasses } from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import CreateQuestion from "./CreateQuestion"
import CreateQuizCard from "./CreateQuizCard"

export default function QuestionsScrollableTabs() {
  const [item, setItem] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setItem(newValue)
  }

  return (
    <Box>
      <Tabs
        value={item}
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
          label="аннотация к тесту"
          sx={{ fontWeight: "700" }}
        />
        <Tab
          label="создать тест"
          sx={{ fontWeight: "700" }}
        />

        <Tab label="Item Two " />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />

        {item === 0 && <CreateQuizCard />}
        {item === 1 && <CreateQuestion />}
      </Tabs>
    </Box>
  )
}
