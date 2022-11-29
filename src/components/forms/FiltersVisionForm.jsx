import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowInDetails } from '../../store/fieldsSlice'

const FiltersVisionForm = () => {
    const fields = useSelector(state => state.fields.value)
    const dispatch = useDispatch()

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginTop: 2}}>
            <Typography variant="h6" marginBottom={2}>Настройки видимости полей</Typography>
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
        </Box>
    )
}

export default FiltersVisionForm