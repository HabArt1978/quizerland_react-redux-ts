import { Routes, Route } from "react-router-dom"

import QuizesPage from "./pages/quizes/index"
import ActiveQuizPage from "./pages/quizes/_id"
import CreateQuizPage from "./pages/quizes/create/create"
import AuthPage from "./pages/auth"
import RedirectPage from "./pages/redirect"
import NotFoundPage from "./pages/404/notFound"
import MenuToggle from "./components/Navigation/MenuToggle"
import RegistrationPage from "./pages/auth/registration"
import "./index.css"

function App() {
  return (
    <>
      <MenuToggle />
      <Routes>
        <Route
          path="/quizes/:id"
          element={<ActiveQuizPage />}
        />
        <Route
          path="/quizes"
          element={<QuizesPage />}
        />
        <Route
          path="/auth"
          element={<AuthPage />}
        />
        <Route
          path="/registration"
          element={<RegistrationPage />}
        />
        <Route
          path="/create-quiz"
          element={<CreateQuizPage />}
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
