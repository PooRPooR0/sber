import { Container, FormControlLabel, Typography, Checkbox } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { changeShowInDetails } from '../store/fieldsSlice'

const Settings = () => {
    const fields = useSelector(state => state.fields.value)
    const dispatch = useDispatch()
    return (
        <div>
            <Header/>
            <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginTop: 2}}>
                <Typography variant="h6" marginBottom={2}>Настройки</Typography>
                {fields.length ? fields.map(field =>
                    <FormControlLabel
                        key={field.name}
                        control={
                            <Checkbox
                                checked={field.showInDetails}
                                onChange={() => dispatch(changeShowInDetails(field.name))}
                            />
                        }
                        label={field.label}
                    />
                )
                : null
                }
            </Container>
        </div>
    )
}

export default Settings