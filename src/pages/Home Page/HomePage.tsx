import { Box } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import Slider from '../../components/Slider/Slider';
import HomePageCityCards from '../../components/HomePageCityCards/HomePageCityCards';

const HomePage = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);

	const sliderText = {
		title: 'Find student homes with bills included',
		subtitle: 'A simple and faster way to search for student accommodation',
	};

	return (
		<Box sx={{ minHeight: isSmallScreen ? '88vh' : '80vh' }}>
			<Slider sliderText={sliderText} />
			<HomePageCityCards />
		</Box>
	);
};

export default HomePage;
