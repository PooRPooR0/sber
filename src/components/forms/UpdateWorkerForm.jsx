import { Edit } from '@mui/icons-material'
import { Autocomplete, Button, Fab, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAutoOptions from '../../hooks/useAutoOptions'
import useInitialValues from '../../hooks/useInitialValues'
import getDefaultSchema from '../../schemas/defaultSchema'
import { updateWorker } from '../../store/workersSlice'

const UpdateWorkerForm = ({selectedWorker={}, onClose}) => {
    const [editMode, setEditMode] = useState(false)

    const fields = useSelector((state) => state.fields.value)
    const { autoOptions } = useAutoOptions()

    const initialValues = useInitialValues(true, selectedWorker)
    const validationSchema = getDefaultSchema(fields)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(updateWorker({...selectedWorker, ...values, changeDate: Date.now()}))
            leaveEditMode()
            onClose()
        }
    })

    const enterEditMode = () => setEditMode(true)
    const leaveEditMode = () => setEditMode(false)

    const cancelChanges = () => {
        leaveEditMode()
        formik.resetForm()
    }

    const getShowFields = () => {
        return fields.filter(field => field.showInDetails)
    }

    const handleChangeAutoField = (fieldName, newValue) => {
        formik.setFieldValue(fieldName, newValue)
    }

    return (
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', gap: 2}}>
            <Typography variant="h6" marginBottom={2}>Сведения о сотруднике {editMode ? '(edit)' : null}</Typography>

            {getShowFields().map(field => {
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
                            readOnly={!editMode}
                            disableClearable
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
                        InputProps={{
                            readOnly: !editMode,
                        }}
                    />
                )
            })}

            {!editMode ?
            <Fab color="primary" aria-label="edit" onClick={enterEditMode}>
                <Edit />
            </Fab>
            : 
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', height: 56, alignItems: 'center'}}>
                <Button onClick={cancelChanges}>отменить</Button>
                <Button variant="contained" onClick={formik.handleSubmit}>Сохранить</Button> 
            </Box>
            }
        </Box>
    )
}

export default UpdateWorkerForm