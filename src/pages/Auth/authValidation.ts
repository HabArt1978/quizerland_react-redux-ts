export const emailRules = {
  required: "Поле обязательное для заполнения!",
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Электронная почта имеет невалидное значение!",
  },
}

export const passwordRules = {
  required: "Поле обязательное для заполнения!",
  pattern: {
    value: /^[-+~*_.:!?#$%&(){}<>\\/|'A-ZА-Я0-9]{6,20}$/i,
    message: "Пароль имеет невалидное значение!",
  },
  minLength: {
    value: 6,
    message: "Пароль короче 6 символов!", // JS only: <p>error message</p> TS only support string
  },
  maxLength: {
    value: 20,
    message: "Пароль длиннее 20 символов!", // JS only: <p>error message</p> TS only support string
  },
}

export const nameFieldRules = {
  required: "Поле обязательное для заполнения!",
  pattern: {
    value: /[А-Я]{2,20}/i,
    message: "Введите ваше имя на русском языке!",
  },
}

export const notErrorsRules = {
  required: "",
}
