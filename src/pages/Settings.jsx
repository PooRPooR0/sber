import { Container } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FiltersVisionForm from '../components/forms/FiltersVisionForm'
import Header from '../components/Header'

const Settings = () => {
    return (
        <div>
            <Header/>
            <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginTop: 2}}>
                <FiltersVisionForm />
            </Container>
        </div>
    )
}

export default Settings