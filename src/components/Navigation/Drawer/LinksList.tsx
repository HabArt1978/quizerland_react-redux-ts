import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { Link } from "react-router-dom"

import { menuToggle } from "../../../store/navigation/actions"

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
import theme from "../../../mui-theme"

import { disabledLink, iconColor } from "./styles"

type LinkMenu = {
  to: string
  label: string
  name: string
}

const links: LinkMenu[] = [
  { to: "/quizes", label: "Список тестов", name: "quizes" },
  { to: "/create-quiz", label: "Создать тест", name: "create-quiz" },
  { to: "/auth", label: "Авторизация", name: "auth" },
]

const setIconLink = (link: LinkMenu) => {
  if (link.name === "quizes") {
    return (
      <ListItemIcon style={iconColor}>
        <FormatListNumberedIcon />
      </ListItemIcon>
    )
  }
  if (link.name === "create-quiz") {
    return (
      <ListItemIcon style={iconColor}>
        <AddTaskIcon />
      </ListItemIcon>
    )
  }
  if (link.name === "auth") {
    return (
      <ListItemIcon style={iconColor}>
        <VerifiedUserIcon />
      </ListItemIcon>
    )
  }
}

const LinksList = () => {
  const user = useAppSelector(({ authState }) => authState.user)
  const dispatch = useAppDispatch()

  return (
    <List>
      {links.map(link => (
        <Link
          to={link.to}
          key={link.to}
          style={link.name === "create-quiz" && !user ? disabledLink : {}}
        >
          <>
            {link.name === "auth" && (
              <Divider sx={{ maxWidth: "90%", marginX: "auto" }} />
            )}
            <ListItem
              key={link.label}
              disablePadding
              sx={{ m: 0 }}
            >
              <ListItemButton
                onClick={() => dispatch(menuToggle())}
                disabled={link.name === "create-quiz" && !user}
              >
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
