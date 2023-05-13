import theme from "../../../mui-theme"

export const textFieldStyle = {
  pb: "1rem",
  // цвет текста input
  input: { color: `${theme.palette.info.contrastText}` },
  // цвет label по умолчанию
  "& .MuiInputLabel-root": {
    color: theme.palette.info.contrastText,
  },
  // цвет label при активации input
  "& .MuiInputLabel-root:hover": {
    color: theme.palette.primary.dark,
  },
  // цвет рамки Input по умолчанию
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: `1px solid ${theme.palette.info.contrastText}`,
    },
  },
  // цвет рамки Input при наведении
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      border: `2px solid ${theme.palette.primary.dark}`,
    },
  },
}

export const answersFieldStyle = {
  mb: "1rem",
  input: { color: "#f5f5f5" },
  "& .MuiInputLabel-root": {
    color: theme.palette.info.contrastText,
  },
  "& .MuiInputLabel-root:hover": {
    color: theme.palette.primary.dark,
  },

  "& .MuiFilledInput-root": {
    borderRadius: 2,
  },
}

export const selectFieldStyle = {
  minWidth: 270,
  mt: "1rem",
  mb: "1rem",

  "& .MuiInputLabel-root": {
    color: theme.palette.info.contrastText,
  },
  "& .MuiInputLabel-root:hover": {
    color: theme.palette.primary.dark,
  },
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: `1px solid ${theme.palette.info.contrastText}`,
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      border: `2px solid ${theme.palette.primary.dark}`,
    },
  },
}
