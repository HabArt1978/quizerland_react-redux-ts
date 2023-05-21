import theme from "../../mui-theme"
import { SxProps } from "@mui/material/styles"

export const fieldStyles: SxProps = {
  width: "100%",
  mb: "2rem",
  input: { color: theme.palette.primary.contrastText },
  "& .Mui-error": {
    color: theme.palette.error.main,
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.error.main,
  },
}

export const buttonStyle: SxProps = {
  py: 1.5,
  bgcolor: theme.palette.primary.dark,
  "&:disabled": {
    color: theme.palette.grey[500],
  },
}
