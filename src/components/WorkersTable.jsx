import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import { useSelector } from 'react-redux';
import WorkersTableRow from './WorkersTableRow';
import WorkerModal from './WorkerModal';

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
                    {workers.length ? workers.map((worker) =>
                        <WorkersTableRow key={worker.tabel} worker={worker} selectWorker={selectWorker}/>
                    ) : null}
                </TableBody>
            </Table>
            <WorkerModal isOpen={isWorkerModal} onClose={closeWorkerModal} selectedWorker={selectedWorker} />
        </TableContainer>
    )
}

export default WorkersTable