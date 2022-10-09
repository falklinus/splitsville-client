export type User = {
  id: string
  username: string
  email: string
}

export type TExpense = {
  id: string
  title: string
  amount: number
  createdAt: string
  createdBy: User
  paidBy: User
  shares: {
    share: number
    user: User
  }[]
}

export type TRegisterInput = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export type TRegisterError = {
  username?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export type TLoginInput = {
  email: string
  password: string
}

export type TLoginError = {
  email?: string
  password?: string
}
