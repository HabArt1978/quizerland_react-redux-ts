import * as yup from "yup"

const answerFieldYupRules = yup
  .string()
  .required("* Поле обязательное для заполнения!")
  .max(39, "Ответ не может иметь более 40 символов!")
  .matches(
    /^(?=[А-ЯA-Z0-9])[а-яА-Яa-zA-Z0-9\W]{1,39}[а-яА-Яa-zA-Z0-9\W]$/,
    "Минимум 2 символа, с заглавной буквы или цифры!",
  )

export const schemaYup = yup.object().shape({
  question: yup
    .string()
    .required("* Поле обязательное для заполнения!")
    .max(79, "Вопрос не может иметь более 80 символов!")
    .matches(
      /^(?=[А-ЯA-Z0-9])[а-яА-Яa-zA-Z0-9\W]{9,79}[а-яА-Яa-zA-Z0-9\W]$/,
      "Минимум 10 символов, с заглавной буквы или цифры!",
    ),

  answers: yup.array().of(answerFieldYupRules),

  select: yup.string(),
})
