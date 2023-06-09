import * as yup from "yup"

const answerFieldYupRules = yup
  .string()
  .required("* Поле обязательное для заполнения!")
  .max(39, "Ответ не может иметь более 40 символов!")
  .matches(
    /^(?=[А-ЯA-Z0-9])[а-яА-Яa-zA-Z0-9\W]{1,39}[а-яА-Яa-zA-Z0-9\W]$/,
    "Минимум 2 символа, с заглавной буквы или цифры!",
  )
export const schemaYupToQuestion = yup.object().shape({
  text: yup
    .string()
    .required("* Поле обязательное для заполнения!")
    .max(79, "Вопрос не может иметь более 80 символов!")
    .matches(
      /^(?=[А-ЯA-Z0-9])[а-яА-Яa-zA-Z0-9\W]{9,79}[а-яА-Яa-zA-Z0-9\W]$/,
      "Минимум 10 символов, с заглавной буквы или цифры!",
    ),

  correctAnswerIndex: yup
    .number()
    .min(0)
    .required("* Поле обязательное для заполнения!"),

  answers: yup.array().of(answerFieldYupRules),
})

export const schemaYupToAnnotation = yup.object().shape({
  title: yup
    .string()
    .required("* Поле обязательное для заполнения!")
    .max(39, "Название теста не может иметь более 40 символов!")
    .matches(
      /^(?=[А-ЯA-Z0-9])[а-яА-Яa-zA-Z0-9\W]{9,39}[а-яА-Яa-zA-Z0-9\W]$/,
      "Минимум 10 символов, с заглавной буквы или цифры!",
    ),

  description: yup
    .string()
    .required("* Поле обязательное для заполнения!")
    .max(370, "Вопрос не может иметь более 370 символов!")
    .matches(
      /^(?=[А-ЯA-Z0-9])[а-яА-Яa-zA-Z0-9\W]{9,370}[а-яА-Яa-zA-Z0-9\W]$/,
      "Минимум 10 символов, с заглавной буквы или цифры!",
    ),
})
