import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { AllCitiesContext } from '../../contexts/AllCitiesContextProvider';
import HomePageCityCard from '../HomePageCityCard/HomePageCityCard';

const HomePageCityCards = () => {
	const { allCities } = useContext(AllCitiesContext);
	return (
		<Box sx={{ margin: '6rem 0 1rem 0' }}>
			<Typography sx={{ textAlign: 'center' }}>Student accommodations in our top cities</Typography>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				{allCities.slice(0, 9).map((city, index) => (
					<HomePageCityCard key={city.id || index} city={city} />
				))}
			</Box>
		</Box>
	);
};

export default HomePageCityCards;
