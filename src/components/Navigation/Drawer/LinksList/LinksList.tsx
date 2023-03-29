import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import AddTaskIcon from "@mui/icons-material/AddTask"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import { Typography } from "@mui/material"

import theme from "../../../../mui-theme"
import { Link } from "react-router-dom"

type Link = {
  to: string
  label: string
  name: string
}

const links: Link[] = [
  { to: "/", label: "Список тестов", name: "quizes" },
  { to: "/create-quiz", label: "Создать тест", name: "create-quiz" },
  { to: "/auth", label: "Авторизация", name: "auth" },
]

const setIconLink = (link: Link) => {
  if (link.name === "quizes") {
    return (
      <ListItemIcon style={{ color: "mediumpurple" }}>
        <FormatListNumberedIcon />
      </ListItemIcon>
    )
  }
  if (link.name === "create-quiz") {
    return (
      <ListItemIcon style={{ color: "mediumpurple" }}>
        <AddTaskIcon />
      </ListItemIcon>
    )
  }
  if (link.name === "auth") {
    return (
      <ListItemIcon style={{ color: "mediumpurple" }}>
        <VerifiedUserIcon />
      </ListItemIcon>
    )
  }
}

const LinksList = () => {
  return (
    <List>
      {links.map(link => (
        <Link
          to={link.to}
          style={{ textDecoration: "none", color: "white" }}
          key={link.to}
        >
          <>
            {link.name === "auth" && (
              <Divider sx={{ maxWidth: "90%", marginX: "auto" }} />
            )}
            <ListItem
              key={link.label}
              disablePadding
            >
              <ListItemButton>
                <>
                  {setIconLink(link)}

                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        color={theme.palette.secondary.main}
                      >
                        {link.label}
                      </Typography>
                    }
                  />
                </>
              </ListItemButton>
            </ListItem>
          </>
        </Link>
      ))}
    </List>
  )
}

export default LinksList
