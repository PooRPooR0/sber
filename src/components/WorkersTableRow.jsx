import React, { useState } from 'react'
import { TableCell, TableRow } from '@mui/material';

const WorkersTableRow = ({worker, selectWorker}) => {
    const getChangeDate = (changeDate) => (new Date(changeDate)).toLocaleString()

    return (
        <TableRow hover onClick={() => selectWorker(worker)}>
            <TableCell>{worker.surname}</TableCell>
            <TableCell>{worker.position}</TableCell>
            <TableCell>{getChangeDate(worker.changeDate)}</TableCell>
        </TableRow>
    )
}

export default WorkersTableRow