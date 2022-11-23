import React from 'react'
import { Box, Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { Container } from "@mui/system";
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	return (
		<Box sx={{borderBottom: 2, borderColor: 'primary.main', backgroundColor: 'primary.light'}}>
			<Container sx={{ display: 'flex', justifyContent: 'start', gap: 2, paddingY: 1}}>
				<Button variant="contained" onClick={() => navigate('/')}>Список сотрудников</Button>
				<Button variant="contained" color="secondary" onClick={() => navigate('/new-worker')}>Добавить сотрудника</Button>
				<Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'end'}}>
					<Button onClick={() => navigate('/settings')}><SettingsIcon color="action" sx={{
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