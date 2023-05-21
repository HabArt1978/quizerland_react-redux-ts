import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Электронная почта имеет невалидное значение!")
    .required("* Поле обязательное для заполнения!"),

  password: yup
    .string()
    .required("* Поле обязательное для заполнения!")
    .min(8, "Пароль должен иметь не менее 8 символов!")
    .max(32, "Пароль не может иметь более 32 символов!"),
})

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .when("$regex1", (regex1, schema) =>
      regex1
        ? schema.matches(/[^\w\s]/g, "Введите ваше имя на русском языке!")
        : schema,
    )
    .when("$regex2", (regex2, schema) =>
      regex2
        ? schema.matches(/^[А-ЯЁ][а-яё]* /, "Введите Фамилию Имя Отчество!")
        : schema,
    )
    .when("$regex3", (regex3, schema) =>
      regex3
        ? schema.matches(
            /^[А-ЯЁ][а-яё]* [А-ЯЁ][а-яё]* /,
            "Введите Имя Отчество!",
          )
        : schema,
    )
    .when("$regex4", (regex4, schema) =>
      regex4
        ? schema.matches(
            /^[А-ЯЁ][а-яё]* [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+/,
            "Введите Отчество!",
          )
        : schema,
    )
    .required("* Поле обязательное для заполнения!"),

  email: yup
    .string()
    .email("Электронная почта имеет невалидное значение!")
    .required("* Поле обязательное для заполнения!"),

  password: yup
    .string()
    .required("* Поле обязательное для заполнения!")
    .min(8, "Пароль должен иметь не менее 8 символов!")
    .max(32, "Пароль не может иметь более 32 символов!"),

  confirmPassword: yup
    .string()
    .required("* Поле обязательное для заполнения!")
    .oneOf([yup.ref("password"), ""], "Пароли должны совпадать!"),
})
