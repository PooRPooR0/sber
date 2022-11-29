import React from 'react'
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import UpdateWorkerForm from './forms/UpdateWorkerForm';

const WorkerModal = ({isOpen, onClose, selectedWorker}) => {
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
                {/* <Typography variant="h6" marginBottom={2}>Сведения о сотруднике {editMode ? '(edit)' : null}</Typography>
                {fields.filter(field => field.showInDetails).map(field => {
                    if (field.type === "autocomplete")
                        return (
                            <Autocomplete
                                disablePortal
                                id={field.name}
                                key={field.name}
                                readOnly={!editMode}
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
                            InputProps={{
                                readOnly: !editMode,
                            }}
                        />
                    )
                })}
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
                </Box> */}
                <UpdateWorkerForm selectedWorker={selectedWorker} onClose={onClose}/>
            </Box>
        </Modal>
    )
}

export default WorkerModal