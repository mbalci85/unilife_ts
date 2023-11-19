import { Box } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const AllCities = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	return <Box sx={{ minHeight: isVerySmallScreen ? '88vh' : '80vh' }}>AllCities</Box>;
};

export default AllCities;
