import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useContext, useState } from 'react';
import { AllCitiesContext } from '../../contexts/AllCitiesContextProvider';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import * as styles from '../../styles/FormStyles';
import { useNavigate } from 'react-router-dom';

const SearchByCity = () => {
	const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
	const { allCities } = useContext(AllCitiesContext);
	const [selectedCityId, setSelectedCityId] = useState<string>('');
	const navigate = useNavigate();
	return (
		<Box sx={styles.SearchByCityFormStyle(isSmallScreen, isMediumScreen)}>
			<Box sx={{ width: '100%' }}>
				<form
					style={{
						display: 'flex',
						flexDirection: isSmallScreen ? 'column' : 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onSubmit={(e: React.FormEvent) => {
						e.preventDefault();
						if (selectedCityId) navigate(`/city/${selectedCityId}`);
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
							value={selectedCityId}
							size='small'
							sx={{
								marginBottom: isSmallScreen ? '0.75rem' : null,
								width: isSmallScreen ? '100%' : '70%',
							}}
							onChange={(e) => setSelectedCityId(e.target.value)}>
							{allCities
								.sort((a, b) => a.name.localeCompare(b.name))
								.map((city) => (
									<MenuItem value={city._id} key={city._id}>
										{city.name}
									</MenuItem>
								))}
						</Select>
					</FormControl>
					<Button
						variant='contained'
						type='submit'
						sx={{
							backgroundColor: '#3A5295',
							width: isSmallScreen ? '75%' : '60%',
							height: '2.25rem',
							textTransform: 'capitalize',
						}}>
						Find Homes
					</Button>
				</form>
			</Box>
		</Box>
	);
};

export default SearchByCity;
