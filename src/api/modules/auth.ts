import { AxiosInstance } from "axios"

type LoginPayload = {
  email: string
  password: string
}

type RegisterPayload = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const authModule = (httpClient: AxiosInstance) => ({
  async login(data: LoginPayload) {
    await httpClient.get("/sanctum/csrf-cookie")
    await httpClient.post("/login", data)
  },

  async register(data: RegisterPayload) {
    await httpClient.get("/sanctum/csrf-cookie")
    await httpClient.post("/register", data)
  },
})

export default authModule
