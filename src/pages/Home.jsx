import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';
import Header from "../components/Header";

const Home = () => {
    const workers = useSelector((state) => state.workers.value)
    
    return (
        <div>
            <Header />
            <Container>
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
                                <TableRow key={worker.tabel}>
                                    <TableCell>{worker.surname}</TableCell>
                                    <TableCell>{worker.position}</TableCell>
                                    <TableCell>{(new Date(worker.changeDate)).toLocaleString()}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}

export default Home