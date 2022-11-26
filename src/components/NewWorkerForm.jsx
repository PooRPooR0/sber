import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useAutoOptions from '../hooks/useAutoOptions'
import { createWorker } from '../store/workersSlice'

const NewWorkerForm = () => {
    const fields = useSelector((state) => state.fields.value)
    const navigate = useNavigate()
    const {autoOptions, positions, units} = useAutoOptions()

    const dispatch = useDispatch()

    const [worker, setWorker] = useState({
        surname: "",
        name: "",
        secondName: "",
        birthday: (new Date()).toISOString().slice(0, 10),
        tabel: Date.now(),
        position: positions[0],
        unit: units[0],
    })

    const create = () => {
        dispatch(createWorker({...worker, id: Date.now(), changeDate: Date.now()}))
    }

    const createAndRefresh = () => {
        create()
        setWorker({
            surname: "",
            name: "",
            secondName: "",
            birthday: (new Date()).toISOString().slice(0, 10),
            tabel: Date.now(),
            position: positions[0],
            unit: units[0],
        })
    }

    const createAndExit = () => {
        create()
        navigate('/')
    }

    const getFieldValue = (fieldName) => {
        return worker[fieldName]
    }

    const onChangeField = (fieldName, value) => {
        setWorker({...worker, [fieldName]: value})
    }

    return (
        <Box sx={{width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 2}}>
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
                            value={getFieldValue(field.name)}
                            onChange={(event, newValue) => onChangeField(field.name, newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth label={field.label} />}
                        />
                    )
                return (
                    <TextField
                        id={field.name}
                        key={field.name}
                        label={field.label}
                        type={field.type}
                        value={getFieldValue(field.name)}
                        onChange={(event) => onChangeField(field.name, event.target.value)}
                        fullWidth
                    />
                )
            })}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="outlined" onClick={createAndRefresh}>Сохранить и добавить еще</Button>
                <Button variant="contained" onClick={createAndExit}>Сохранить и перейти в список</Button>
            </Box>
        </Box>
    )
}

export default NewWorkerForm