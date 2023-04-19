export const validateEmail = (value: string) => {
  const regexp =
    /^[-+_~*.!?#$%&(){}<>\\/|'A-Z0-9]+?@[A-Z]+[-.]?[A-Z]+[-.][A-Z]{2,}$/i
  const isValid = regexp.test(value)

  return isValid
}

export const validatePassword = (value: string) => {
  const regexp = /^[-+~*.!?#$%&(){}<>\\/|'A-ZА-Я0-9]{6,20}$/i
  const isValid = regexp.test(value)

  return isValid
}

export const validateName = (value: string) => {
  const regexp = /[А-Я]{2,20}/i
  const isValid = regexp.test(value)

  return isValid
}

export const allowEmpty = (value: string) => {
  return value.length === 0
}
