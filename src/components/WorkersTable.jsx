import React, { useState } from 'react'
import { Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import WorkersTableRow from './WorkersTableRow';
import { Box } from '@mui/system';

const WorkersTable = () => {
    const [isWorkerModal, setIsWorkerModal] = useState(false)
    const [selectedWorker, setSelectedWorker] = useState({})
    const workers = useSelector((state) => state.workers.value)

    const selectWorker = (worker) => {
        setSelectedWorker(worker)
        setIsWorkerModal(true)
    }

    const closeWorkerModal = () => setIsWorkerModal(false)

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Фамилия</TableCell>
                        <TableCell>Должность</TableCell>
                        <TableCell>Дата изменения</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {workers.map((worker) =>
                        <WorkersTableRow key={worker.tabel} worker={worker} selectWorker={selectWorker}/>
                    )}
                </TableBody>
            </Table>
            <Modal open={isWorkerModal} onClose={closeWorkerModal}>
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
                    gap: 1,
                    '&:focus-visible': {
                        outline: 'none',
                    }
                }}>
                    <TextField
                        label='Фамилия'
                        value={selectedWorker.surname}
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label='Имя'
                        value={selectedWorker.name}
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label='Отчество'
                        value={selectedWorker.secondName}
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Box>
            </Modal>
        </TableContainer>
    )
}

export default WorkersTable