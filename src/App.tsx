import QuizList from "./pages/QuizList"
import ActiveQuiz from "./components/QuizCard/ActiveQuiz/ActiveQuiz"
import CreateQuiz from "./pages/CreateQuiz"
import Auth from "./pages/Auth/Auth"
import FinishedQuiz from "./pages/FinishedQuiz"
import RedirectPage from "./pages/RedirectPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import MenuToggle from "./components/Navigation/MenuToggle/MenuToggle"
import { Routes, Route } from "react-router-dom"
import Registration from "./pages/Auth/Registration"
import "./index.css"

function App() {
  return (
    <>
      <MenuToggle />
      <Routes>
        <Route
          path="/active-quiz/:id"
          element={<ActiveQuiz />}
        />
        <Route
          path="/quizes"
          element={<QuizList />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
        <Route
          path="/registration"
          element={<Registration />}
        />
        <Route
          path="/create-quiz"
          element={<CreateQuiz />}
        />
        <Route
          path="/finished-quiz"
          element={<FinishedQuiz />}
        />

        <Route
          path="/"
          element={<RedirectPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  )
}

export default App
