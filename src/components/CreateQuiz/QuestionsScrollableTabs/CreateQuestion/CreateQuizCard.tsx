import { FC, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import theme from "../../../../mui-theme"
import { textFieldStyle } from "../../style"

import { schemaYupToAnnotation } from "../../validation"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { setQuizAnnotation } from "../../../../store/newQuiz/actions"

type FormData = yup.InferType<typeof schemaYupToAnnotation>

type IsValid = {
  setIsValidFormCard: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateQuizCard: FC<IsValid> = ({ setIsValidFormCard }) => {
  const currentAnnotation = useAppSelector(({ newQuizState }) => newQuizState)
  const dispatch = useAppDispatch()

  const {
    watch,
    control,
    formState: { isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      title: currentAnnotation.title,
      description: currentAnnotation.description,
    },
    resolver: yupResolver(schemaYupToAnnotation),
  })

  useEffect(() => {
    isValid ? setIsValidFormCard(true) : setIsValidFormCard(false)
  }, [isValid, setIsValidFormCard])

  useEffect(() => {
    const subscription = watch(value => {
      dispatch(setQuizAnnotation(value))
    })

    return () => subscription.unsubscribe()
  }, [watch, dispatch])

  return (
    <Box sx={{ mt: "2rem" }}>
      <Controller
        control={control}
        name="title"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            fullWidth
            type="text"
            label="Название теста"
            placeholder="Тест по истории"
            required
            variant="outlined"
            value={value}
            onChange={event => onChange(event)}
            error={!!error}
            helperText={error?.message}
            sx={textFieldStyle}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            fullWidth
            type="text"
            label="Аннотация к тесту"
            placeholder="Исто́рия — наука, исследующая прошлое, реальные факты и закономерности смены исторических событий, эволюцию общества и отношений внутри него, обусловленных человеческой деятельностью на протяжении многих поколений. В наши дни появилось новое определение истории как науки «о прошлой социальной реальности»"
            multiline
            rows={4}
            inputProps={{
              style: { color: theme.palette.primary.contrastText },
            }}
            required
            variant="outlined"
            value={value}
            onChange={event => onChange(event)}
            error={!!error}
            helperText={error?.message}
            sx={textFieldStyle}
          />
        )}
      />
    </Box>
  )
}

export default CreateQuizCard
