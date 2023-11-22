import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import Slider from '../../components/Slider/Slider';
import HomePageCityCards from '../../components/HomePageCityCards/HomePageCityCards';
import { useNavigate } from 'react-router-dom';
import KeepInTouch from '../../components/KeepInTouch/KeepInTouch';
import HomePageFeatures from '../../components/HomePageFeatures/HomePageFeatures';

const HomePage = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const navigate = useNavigate();

	const sliderText = {
		title: 'Find student homes with bills included',
		subtitle: 'A simple and faster way to search for student accommodation',
	};

	return (
		<Box sx={{ minHeight: isSmallScreen ? '88vh' : '80vh' }}>
			<Slider sliderText={sliderText} />
			<HomePageCityCards />
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button
					sx={{ backgroundColor: '#3A5295', color: '#FFFFFF' }}
					onClick={() => {
						navigate('/all_cities');
					}}>
					See All Cities
				</Button>
			</Box>
			<HomePageFeatures />
			<Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
				<Button sx={{ backgroundColor: '#3A5295', color: '#FFFFFF' }}>Search & Compare</Button>
			</Box>
			<KeepInTouch />
		</Box>
	);
};

export default HomePage;
