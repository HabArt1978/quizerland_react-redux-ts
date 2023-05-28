import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

import { menuToggle } from "../../../store/navigation/actions"
import { unsetUser } from "../../../store/auth/actions"

import api from "../../../api"

import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import AddTaskIcon from "@mui/icons-material/AddTask"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import LogoutIcon from "@mui/icons-material/Logout"
import { Typography } from "@mui/material"
import theme from "../../../mui-theme"

import { disabledLink, iconColor } from "./styles"

type LinkMenu = {
  to: string
  label: string
  name: string
}

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
  if (link.name === "logout") {
    return (
      <ListItemIcon style={iconColor}>
        <LogoutIcon />
      </ListItemIcon>
    )
  }
}

const LinksList = () => {
  const user = useAppSelector(({ authState }) => authState.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const links: LinkMenu[] = [
    { to: "/quizes", label: "Список тестов", name: "quizes" },
  ]

  if (user) {
    links.push({
      to: "/create-quiz",
      label: "Создать тест",
      name: "create-quiz",
    })
    links.push({ to: "/", label: "Выйти", name: "logout" })
  } else {
    links.push({
      to: "/create-quiz",
      label: "Создать тест",
      name: "create-quiz",
    })
    links.push({ to: "/auth", label: "Авторизация", name: "auth" })
  }

  const logoutHandler = (linkName: string) => {
    if (linkName !== "logout") {
      return
    } else {
      api.auth.logout()
      dispatch(unsetUser())
      navigate("/quizes")
    }
  }

  return (
    <List>
      {links.map(link => (
        <Link
          to={link.to}
          key={link.to}
          style={link.name === "create-quiz" && !user ? disabledLink : {}}
        >
          <>
            {(link.name === "auth" || link.name === "logout") && (
              <Divider sx={{ maxWidth: "90%", marginX: "auto" }} />
            )}
            <ListItem
              key={link.label}
              disablePadding
              sx={{ m: 0 }}
              onClick={() => logoutHandler(link.name)}
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
