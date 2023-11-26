import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { AllCitiesContext } from '../../contexts/AllCitiesContextProvider';
import HomePageCityCard from '../HomePageCityCard/HomePageCityCard';

const HomePageCityCards = () => {
	const { allCities } = useContext(AllCitiesContext);
	return (
		<Box sx={{ margin: '8rem 0 1rem 0' }}>
			<Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '1rem' }}>
				Student accommodations in our top cities
			</Typography>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				{allCities &&
					allCities.slice(0, 9).map((city, index) => <HomePageCityCard key={city.id || index} city={city} />)}
			</Box>
		</Box>
	);
};

export default HomePageCityCards;
