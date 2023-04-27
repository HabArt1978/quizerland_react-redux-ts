export const textFieldRules = {
  required: "Поле обязательное для заполнения!",
  pattern: {
    value: /^(?=[А-ЯA-Z0-9])[а-яА-Яa-zA-Z0-9\W]{0,80}[а-яА-Яa-zA-Z0-9\W]$/,
    message: "Текст имеет невалидное значение!",
  },
}
