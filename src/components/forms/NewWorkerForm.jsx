import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useAutoOptions from '../../hooks/useAutoOptions'
import { createWorker } from '../../store/workersSlice'
import useInitialValues from '../../hooks/useInitialValues'
import getDefaultSchema from '../../schemas/defaultSchema'

const NewWorkerForm = () => {
    const fields = useSelector((state) => state.fields.value)
    const navigate = useNavigate()
    const { autoOptions } = useAutoOptions()
    const dispatch = useDispatch()

    const initialValues = useInitialValues()
    const validationSchema = getDefaultSchema(fields)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(createWorker({ ...values, id: Date.now(), changeDate: Date.now() }))
            formik.resetForm()
        },
    })

    const createAndExit = () => {
        formik.handleSubmit()
        if (formik.isValid) navigate('/')
    }

    const handleChangeAutoField = (fieldName, newValue) => {
        formik.setFieldValue(fieldName, newValue)
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Новый сотрудник</Typography>
            {fields.map(field => {
                if (field.type === "autocomplete")
                    return (
                        <Autocomplete
                            disablePortal
                            id={field.name}
                            key={field.name}
                            fullWidth
                            options={autoOptions(field.options)}
                            value={formik.values[field.name]}
                            onChange={(event, newValue) => handleChangeAutoField(field.name, newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth label={field.label} />}
                        />
                    )
                return (
                    <TextField
                        id={field.name}
                        key={field.name}
                        label={field.label}
                        type={field.type}
                        value={formik.values[field.name]}
                        onChange={formik.handleChange}
                        fullWidth
                        error={!!formik.errors[field.name]}
                        helperText={formik.errors[field.name]}
                    />
                )
            })}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={formik.handleSubmit}>Сохранить и добавить еще</Button>
                <Button variant="contained" onClick={createAndExit}>Сохранить и перейти в список</Button>
            </Box>
        </Box>
    )
}

export default NewWorkerForm