import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import Slider from '../../components/Slider/Slider';
import HomePageCityCards from '../../components/HomePageCityCards/HomePageCityCards';
import { useNavigate } from 'react-router-dom';
import HomePageFeatures from '../../components/HomePageFeatures/HomePageFeatures';
import SearchByCity from '../../components/forms/SearchByCity';

const HomePage = () => {
	const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
	const navigate = useNavigate();

	const sliderText = {
		title: 'Find student homes with bills included',
		subtitle1: 'A simple and faster way to search for student accommodation',
		subtitle2: '',
	};

	const btnStyle = {
		backgroundColor: '#3A5295',
		color: '#FFFFFF',
		padding: '0.5rem 1rem',
		textTransform: 'capitalize',
		':hover': {
			backgroundColor: 'rgba(0, 162, 225, 1)',
		},
	};

	return (
		<Box sx={{ minHeight: isSmallScreen ? '88vh' : '80vh' }}>
			<Box>
				<Slider sliderText={sliderText} />

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: isSmallScreen ? '-4rem' : '-2rem',
						zIndex: 100,
					}}>
					<SearchByCity />
				</Box>
			</Box>

			<HomePageCityCards />
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button
					sx={btnStyle}
					onClick={() => {
						navigate('/all_cities');
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}>
					See All Cities
				</Button>
			</Box>
			<HomePageFeatures />
			{isMediumScreen ? (
				<Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
					<Button
						sx={btnStyle}
						onClick={() => {
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}>
						Search & Compare
					</Button>
				</Box>
			) : null}
		</Box>
	);
};

export default HomePage;
