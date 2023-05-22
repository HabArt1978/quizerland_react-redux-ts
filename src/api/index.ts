import axios from "axios"
import authModule from "./modules/auth"

const httpClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  responseType: "json",
})

const api = {
  auth: authModule(httpClient),
}

export default api
