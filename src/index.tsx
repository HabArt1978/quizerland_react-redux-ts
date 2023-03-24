import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./App"
import { ThemeProvider } from "@mui/material"
import theme from "./mui-theme"

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
