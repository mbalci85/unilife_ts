import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext, useState } from 'react';
import { AllCitiesContext } from '../../contexts/AllCitiesContextProvider';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import * as styles from '../../styles/FormStyles';

const SearchByCity = () => {
	const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
	const { allCityNames } = useContext(AllCitiesContext);
	const [selectedCity, setSelectedCity] = useState<string>('');
	return (
		<Box sx={styles.SearchByCityFormStyle(isSmallScreen, isMediumScreen)}>
			<Box sx={{ width: '100%' }}>
				<form
					style={{
						display: 'flex',
						flexDirection: isSmallScreen ? 'column' : 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<FormControl fullWidth>
						<InputLabel
							id='select-city'
							sx={{
								lineHeight: '1', // Adjusted lineHeight for vertical centering
							}}>
							Search by City
						</InputLabel>
						<Select
							id='select-city'
							label='Search by City'
							value={selectedCity}
							size='small'
							sx={{
								marginBottom: isSmallScreen ? '0.75rem' : null,
								width: isSmallScreen ? '100%' : '70%',
							}}
							onChange={(e) => setSelectedCity(e.target.value)}>
							{allCityNames.sort().map((city) => (
								<MenuItem value={city} key={city}>
									{city}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button
						variant='contained'
						sx={{ backgroundColor: '#3A5295', width: isSmallScreen ? '75%' : '60%', height: '2.25rem' }}>
						Find Homes
					</Button>
				</form>
			</Box>
		</Box>
	);
};

export default SearchByCity;
