import { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

import { textFieldStyle } from "./style"

import { schemaYupToAnnotation } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import theme from "../../mui-theme"

type FormData = yup.InferType<typeof schemaYupToAnnotation>

const CreateQuizCard: FC = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isDirty, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      testName: "",
      annotation: "",
    },
    resolver: yupResolver(schemaYupToAnnotation),
  })

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
    reset()
  }

  return (
    <Box sx={{ mt: "2rem" }}>
      <Controller
        control={control}
        name="testName"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            fullWidth
            type="text"
            label="Название теста"
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
        name="annotation"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextField
            fullWidth
            type="text"
            label="Аннотация к тесту"
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
