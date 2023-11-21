import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext, useState } from 'react';
import { AllCitiesContext } from '../../contexts/AllCitiesContextProvider';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const SearchByCity = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const { allCityNames } = useContext(AllCitiesContext);
	const [selectedCity, setSelectedCity] = useState<string>('');
	return (
		<Box
			sx={{
				margin: '0 auto',
				width: '70vw',
				height: '21vh',
				border: 'solid  0.05rem',
				borderRadius: '1.25rem',
				padding: '1rem',
				backgroundColor: 'white',
				boxShadow: '0.2rem 0 0.2rem 0.2rem rgba(0, 0, 0, 0.3)',
			}}>
			<form
				style={{
					display: 'flex',
					flexDirection: isSmallScreen ? 'column' : 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<FormControl fullWidth>
					<InputLabel id='select-city'>Search by City</InputLabel>
					<Select
						id='select-city'
						label='Search by City'
						value={selectedCity}
						sx={{ marginBottom: '0.75rem' }}
						onChange={(e) => setSelectedCity(e.target.value)}>
						{allCityNames.map((city) => (
							<MenuItem value={city} key={city}>
								{city}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Button variant='contained' sx={{ backgroundColor: '#3A5295', width: '70%', height: '2rem' }}>
					Find Homes
				</Button>
			</form>
		</Box>
	);
};

export default SearchByCity;
