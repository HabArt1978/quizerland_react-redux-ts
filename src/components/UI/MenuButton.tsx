import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

export default function MenuButton() {
  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        sx={{ position: "fixed", color: "#fff", margin: "1rem" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}
