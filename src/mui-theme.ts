import { colors, createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      main: colors.amber[500],
      light: colors.amber[300],
      dark: colors.yellow[800],
      contrastText: colors.grey[100],
    },

    secondary: {
      light: colors.red[300],
      main: colors.red[400],
      dark: colors.red[600],
      contrastText: colors.grey[100],
    },

    info: {
      main: colors.deepPurple[300],
      light: colors.deepPurple[200],
      dark: colors.deepPurple[400],
      contrastText: colors.grey[100],
    },

    error: {
      main: colors.orange[700],
      light: colors.orange[100],
      dark: colors.orange[900],
      contrastText: colors.grey[600],
    },
  },
})

export default theme
