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
                <UpdateWorkerForm selectedWorker={selectedWorker} onClose={onClose}/>
            </Box>
        </Modal>
    )
}

export default WorkerModal