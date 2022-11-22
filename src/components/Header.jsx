import React from 'react'
import { Box, Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { Container } from "@mui/system";

const Header = () => {
  return (
	<Box sx={{borderBottom: 2, borderColor: 'primary.main', backgroundColor: 'primary.light'}}>
		<Container sx={{ display: 'flex', justifyContent: 'start', gap: 2, paddingY: 1}}>
			<Button variant="contained">Список сотрудников</Button>
			<Button variant="contained" color="secondary">Добавить сотрудника</Button>
			<Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'end'}}>
				<Button><SettingsIcon color="action" sx={{
					transition: '0.2s',
					'&:hover': {
						transform: 'rotate(90deg)',
						transition: '0.2s',
					},
				}}/></Button>
			</Box>
		</Container>
	</Box>
  )
}

export default Header