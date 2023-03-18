import CssBaseline from "@mui/material/CssBaseline"
import QuizList from "./pages/QuizList"
import MenuButton from "./components/UI/MenuButton"
import ActiveQuiz from "./components/Quiz/ActiveQuiz"

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <MenuButton />
      <QuizList />
      {/* <ActiveQuiz /> */}
    </div>
  )
}

export default App
