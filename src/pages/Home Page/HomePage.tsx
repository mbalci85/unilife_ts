import { Box } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import Slider from '../../components/Slider/Slider';
import SearchByCity from '../../components/forms/SearchByCity';

const HomePage = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Box sx={{ minHeight: isSmallScreen ? '88vh' : '80vh' }}>
			<Slider />
			<SearchByCity />
		</Box>
	);
};

export default HomePage;
