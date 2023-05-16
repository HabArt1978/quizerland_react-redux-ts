import { useAppDispatch } from "../../../store/hooks"
import { useAppSelector } from "../../../store/hooks"

import { menuToggle } from "../../../store/navigation/actions"

import LinksList from "./LinksList"

import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

const MenuDrawer = () => {
  const { isOpen } = useAppSelector(({ navigationState }) => navigationState)
  const dispatch = useAppDispatch()

  return (
    <>
      <Drawer
        anchor={"left"}
        open={isOpen}
        onClose={() => dispatch(menuToggle())}
      >
        <IconButton
          style={{
            borderRadius: "50%",
            margin: "0.3rem 0.3rem 0rem auto",
            color: "mediumpurple",
          }}
          onClick={() => dispatch(menuToggle())}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box
          sx={{ width: 300 }}
          role="presentation"
        >
          <LinksList />
        </Box>
      </Drawer>
    </>
  )
}

export default MenuDrawer
