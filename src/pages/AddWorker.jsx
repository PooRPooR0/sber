import { Container } from '@mui/system'
import React from 'react'
import Header from '../components/Header'
import NewWorkerForm from '../components/NewWorkerForm'

const AddWorker = () => {
  return (
    <div>
        <Header />
        <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2}}>
            <NewWorkerForm />
        </Container>
    </div>
  )
}

export default AddWorker