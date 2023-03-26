import { useState } from "react"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import AddTaskIcon from "@mui/icons-material/AddTask"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { Typography } from "@mui/material"
import theme from "../../mui-theme"
import { Link } from "react-router-dom"

type Link = {
  to: string
  label: string
  name: string
}

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={() => setIsOpen(true)}
        sx={{ position: "fixed", color: "#fff", margin: "1rem" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <IconButton
          style={{
            borderRadius: "50%",
            margin: "0.3rem 0.3rem 0rem auto",
            color: "mediumpurple",
          }}
          onClick={() => setIsOpen(false)}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box
          sx={{ width: 300 }}
          role="presentation"
        >
          <List>
            {links.map((link, index) => (
              <Link
                to={link.to}
                style={{ textDecoration: "none", color: "white" }}
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
                        {/* <ListItemIcon style={{ color: "mediumpurple" }}>
                        {index % 2 === 0 ? (
                          <FormatListNumberedIcon />
                        ) : (
                          <AddTaskIcon />
                        )}
                      </ListItemIcon> */}
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
        </Box>
      </Drawer>
    </>
  )
}
