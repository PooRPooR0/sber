import React from 'react'
import { Container } from '@mui/system';
import Header from "../components/Header";
import WorkersTable from '../components/WorkersTable';

const Home = () => {
    
    
    return (
        <div>
            <Header />
            <Container>
                <WorkersTable />
            </Container>
        </div>
    )
}

export default Home