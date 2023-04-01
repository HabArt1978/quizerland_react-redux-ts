import QuizList from "./pages/QuizList"
import ActiveQuiz from "./components/QuizCard/ActiveQuiz/ActiveQuiz"
import CreateQuiz from "./pages/CreateQuiz"
import Auth from "./pages/Auth"
import FinishedQuiz from "./components/FinishedQuiz/FinishedQuiz"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import MenuToggle from "./components/Navigation/MenuToggle/MenuToggle"
import { Routes, Route, Navigate } from "react-router-dom"

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
          path="/create-quiz"
          element={<CreateQuiz />}
        />
        <Route
          path="/"
          element={<Navigate to="/quizes" />}
        />
        <Route
          path="/finished-quiz"
          element={<FinishedQuiz />}
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
