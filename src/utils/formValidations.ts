export const validateEmail = (email: string) => {
  const trimedEmail = email.trim()
  if (!trimedEmail) return []

  const errors = []

  const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

  const isValidEmailFormat = emailRegex.test(trimedEmail)

  if (!isValidEmailFormat) errors.push('Not a valid email format')

  return errors
}

export const validatePassword = (password: string) => {
  if (!password) return []

  const error = []
  if (password.length < 6) error.push('Password must be more than 5 characters')

  //error.push('Testing multi-line password errors')
  return error
}
