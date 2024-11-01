export interface LoginForm {
  email: string
  password: string
}
export interface RegisterForm extends LoginForm {
  userName: string
  firstName: string
  lastName: string
  confirmPassword: string
}