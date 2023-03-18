import Radio from "@mui/material/Radio"
import FormControl from "@mui/material/FormControl"

import theme from "../../mui-theme"
import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react"

export default function AnswersRadioGroup() {
  const [selected, setSelected] = useState<null | number>(null)

  const answers = [
    {
      id: 1,
      text: "Paris",
    },
    {
      id: 2,
      text: "London",
    },
    {
      id: 3,
      text: "Moscow",
    },
    {
      id: 4,
      text: "Tokyo",
    },
    {
      id: 5,
      text: "Toronto",
    },
  ]

  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem 2rem 1rem 2rem",
      }}
    >
      <List>
        {answers.map(answer => {
          const isSelected = selected === answer.id

          return (
            <ListItemButton
              onClick={() => setSelected(answer.id)}
              color="primary"
              sx={{
                backgroundColor: isSelected
                  ? "rgba(235, 171, 28, 0.08)"
                  : "unset",
              }}
            >
              <ListItemIcon>
                <Radio
                  checked={isSelected}
                  color="secondary"
                />
              </ListItemIcon>
              <ListItemText
                primary={answer.text}
                sx={{
                  color: isSelected ? theme.palette.secondary.main : "inherit",
                }}
              />
            </ListItemButton>
          )
        })}
      </List>
    </FormControl>
  )
}
