import { Box } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const CityDetails = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	return <Box sx={{ minHeight: isVerySmallScreen ? '88vh' : '80vh' }}>CityDetails</Box>;
};

export default CityDetails;
