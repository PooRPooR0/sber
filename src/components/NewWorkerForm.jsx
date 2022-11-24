import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createWorker } from '../store/workersSlice'

const NewWorkerForm = () => {
    const positions = useSelector((state) => state.positions.value)
    const units = useSelector((state) => state.units.value)
    const navigate = useNavigate()

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

    return (
        <Box sx={{width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Typography variant="h6">Новый сотрудник</Typography>
            <TextField
                label='Фамилия'
                fullWidth
                value={worker.surname}
                onChange={(event) => setWorker({...worker, surname: event.target.value})}
            />
            <TextField
                label='Имя'
                fullWidth
                value={worker.name}
                onChange={(event) => setWorker({...worker, name: event.target.value})}
            />
            <TextField
                label='Отчество'
                fullWidth
                value={worker.secondName}
                onChange={(event) => setWorker({...worker, secondName: event.target.value})}
            />
            <TextField
                label='День рождения'
                type='date'
                fullWidth
                value={worker.birthday}
                onChange={(event) => setWorker({...worker, birthday: event.target.value})}
            />
            <TextField
                label='Табельный номер'
                fullWidth
                value={worker.tabel}
                onChange={(event) => setWorker({...worker, tabel: event.target.value})}
            />
            <Autocomplete
                disablePortal
                id="position"
                options={positions}
                fullWidth
                value={worker.position}
                onChange={(event, newValue) => setWorker({...worker, position: newValue})}
                renderInput={(params) => <TextField {...params} fullWidth label="Должность" />}
            />
            <Autocomplete
                disablePortal
                id="position"
                options={units}
                fullWidth
                value={worker.unit}
                onChange={(event, newValue) => setWorker({...worker, unit: newValue})}
                renderInput={(params) => <TextField {...params} fullWidth label="Отдел" />}
            />
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Button variant="outlined" onClick={createAndRefresh}>Сохранить и добавить еще</Button>
                <Button variant="contained" onClick={createAndExit}>Сохранить и перейти в список</Button>
            </Box>
        </Box>
    )
}

export default NewWorkerForm