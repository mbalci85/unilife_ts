import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import Slider from '../../components/Slider/Slider';
import { AllCitiesContext } from '../../contexts/AllCitiesContextProvider';
import { City } from '../../interfaces/City';
import KeepInTouch from '../../components/KeepInTouch/KeepInTouch';

const AllCities = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);

	const { allCities } = useContext(AllCitiesContext);

	const sliderText = {
		title: 'Student Accommodation',
		subtitle1: 'UniLife have student accommodation available across the UK.',
		subtitle2: 'Whatever you’re after, we can help you find the right student accommodation for you.',
	};

	return (
		<Box sx={{ minHeight: isVerySmallScreen ? '88vh' : '80vh' }}>
			<Slider sliderText={sliderText} />
			<Typography variant='h5' sx={{ textAlign: 'center', margin: '2rem 0' }}>
				Search by City
			</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginBottom: '3rem' }}>
				{allCities
					.sort((a: City, b: City) => a.name.localeCompare(b.name))
					.map((city) => (
						<Button
							variant='outlined'
							sx={{ height: '3rem', width: '8rem', margin: '1.5rem', padding: '2rem 7rem' }}
							key={city.id}>
							{city.name}
						</Button>
					))}
			</Box>
			<KeepInTouch />
		</Box>
	);
};

export default AllCities;
