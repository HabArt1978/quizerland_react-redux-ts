import theme from "../../mui-theme"
import { SxProps } from "@mui/material/styles"

export const errorStyles: SxProps = {
  mb: "2rem",
  input: { color: "#f5f5f5" },
  "& .Mui-error": {
    color: theme.palette.error.main,
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.error.main,
  },
}
