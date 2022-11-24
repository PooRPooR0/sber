import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, Button, Fab, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Edit } from '@mui/icons-material';
import { updateWorker } from '../store/workersSlice';

const WorkerModal = ({isOpen, onClose, selectedWorker}) => {
    const [editMode, setEditMode] = useState(false)
    const [editableWorker, setEditableWorker] = useState({})

    const positions = useSelector((state) => state.positions.value)
    const units = useSelector((state) => state.units.value)
    const dispatch = useDispatch()

    const enterEditMode = () => {
        setEditableWorker(selectedWorker)
        setEditMode(true)
    }

    const leaveEditMode = () => setEditMode(false)

    const saveChanges = () => {
        dispatch(updateWorker({...editableWorker, changeDate: Date.now()}))
        setEditableWorker({})
        leaveEditMode()
        onClose()
    }

    const cancelChanges = () => {
        setEditableWorker({})
        leaveEditMode()
    }

    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                backgroundColor: 'white',
                borderRadius: 2,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                '&:focus-visible': {
                    outline: 'none',
                }
            }}>
                <Typography variant="h6" marginBottom={2}>Сведения о сотруднике {editMode ? '(edit)' : null}</Typography>
                <TextField
                    label='Фамилия'
                    value={editMode ? editableWorker.surname : selectedWorker.surname}
                    onChange={(event) => setEditableWorker({...editableWorker, surname: event.target.value})}
                    fullWidth
                    InputProps={{
                        readOnly: !editMode,
                    }}
                />
                <TextField
                    label='Имя'
                    value={editMode ? editableWorker.name : selectedWorker.name}
                    onChange={(event) => setEditableWorker({...editableWorker, name: event.target.value})}
                    fullWidth
                    InputProps={{
                        readOnly: !editMode,
                    }}
                />
                <TextField
                    label='Отчество'
                    value={editMode ? editableWorker.secondName : selectedWorker.secondName}
                    onChange={(event) => setEditableWorker({...editableWorker, secondName: event.target.value})}
                    fullWidth
                    InputProps={{
                        readOnly: !editMode,
                    }}
                />
                <TextField
                    label='День рождения'
                    value={editMode ? editableWorker.birthday : selectedWorker.birthday}
                    onChange={(event) => setEditableWorker({...editableWorker, birthday: event.target.value})}
                    type='date'
                    fullWidth
                    InputProps={{
                        readOnly: !editMode,
                    }}
                />
                <TextField
                    label='Табельный номер'
                    value={editMode ? editableWorker.tabel : selectedWorker.tabel}
                    onChange={(event) => setEditableWorker({...editableWorker, tabel: event.target.value})}
                    fullWidth
                    InputProps={{
                        readOnly: !editMode,
                    }}
                />
                <Autocomplete
                    disablePortal
                    id="position"
                    options={positions}
                    fullWidth
                    value={editMode ? editableWorker.position : selectedWorker.position}
                    onChange={(event, newValue) => setEditableWorker({...editableWorker, position: newValue})}
                    readOnly={!editMode}
                    renderInput={(params) => <TextField {...params} fullWidth label="Должность" />}
                />
                <Autocomplete
                    disablePortal
                    id="position"
                    options={units}
                    fullWidth
                    value={editMode ? editableWorker.unit : selectedWorker.unit}
                    onChange={(event, newValue) => setEditableWorker({...editableWorker, unit: newValue})}
                    readOnly={!editMode}
                    renderInput={(params) => <TextField {...params} fullWidth label="Отдел" />}
                />
                <Box sx={{width: '100%'}}>
                    {!editMode ?
                    <Fab color="primary" aria-label="edit" onClick={enterEditMode}>
                        <Edit />
                    </Fab>
                    : 
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', height: 56, alignItems: 'center'}}>
                        <Button onClick={cancelChanges}>отменить</Button>
                        <Button variant="contained" onClick={saveChanges}>Сохранить</Button> 
                    </Box>
                    }
                </Box>
            </Box>
        </Modal>
    )
}

export default WorkerModal