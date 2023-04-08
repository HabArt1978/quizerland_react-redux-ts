import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { menuToggle } from "../../../store/navigation/actions"
import { useAppDispatch } from "../../../store/hooks"
import MenuDrawer from "../Drawer/Drawer"

const MenuToggle = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={() => dispatch(menuToggle())}
        sx={{ position: "fixed", color: "#fff", margin: "1rem" }}
      >
        <MenuIcon />
      </IconButton>
      <MenuDrawer />
    </>
  )
}
export default MenuToggle
