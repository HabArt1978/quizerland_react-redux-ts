import { AxiosInstance } from "axios"

type LoginPayload = {
  email: string
  password: string
}

const authModule = (httpClient: AxiosInstance) => ({
  async login(data: LoginPayload) {
    await httpClient.get("/sanctum/csrf-cookie")
    await httpClient.post("/login", data)
  },
})

export default authModule
