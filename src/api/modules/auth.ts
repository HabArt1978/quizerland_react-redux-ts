import { AxiosInstance } from "axios"
import { User } from "../../store/auth/types"

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

  async user() {
    await httpClient.get("/sanctum/csrf-cookie")
    const response = await httpClient.get("/api/user")
    return response.data as User
  },
})

export default authModule
