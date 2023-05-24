export type AuthState = {
  user: User | null
}

export type User = {
  id: number
  name: string
  email: string
}
