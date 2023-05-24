import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useAppDispatch } from "./store/hooks"

import api from "./api"
import { setUser } from "./store/auth/actions"
import MenuToggle from "./components/Navigation/MenuToggle"

import QuizesPage from "./pages/quizes/index"
import ActiveQuizPage from "./pages/quizes/_id"
import CreateQuizPage from "./pages/quizes/create"
import AuthPage from "./pages/auth"
import RedirectPage from "./pages/redirect"
import NotFoundPage from "./pages/404/notFound"
import RegistrationPage from "./pages/auth/registration"
import QuizesPassed from "./pages/quizes/quizesPassed/QuizesPassed"

import "./index.css"
import { error } from "console"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Запрос выполняется дважды в дев окружении, т.к. включен React.StrictMode
    api.auth
      .user()
      .then(user => dispatch(setUser(user)))
      .catch(error => console.error(`Пользователь не авторизован / ${error}`))
  }, [dispatch])

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
          path="/quizes-passed"
          element={<QuizesPassed />}
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
