export type TUser = {
  id: string
  username: string
  email: string
}

export type TGroup = {
  id: string
  title: string
  members: TUser[]
  expenses: TExpense[]
  createdAt: string
  createdBy: TUser
}

export type TExpense = {
  id: string
  groupId: string
  title: string
  amount: number
  createdAt: string
  createdBy: TUser
  paidBy: TUser
  shares: {
    share: number
    user: TUser
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
