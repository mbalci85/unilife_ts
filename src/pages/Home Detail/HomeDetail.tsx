import { Box } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const HomeDetail = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	return <Box sx={{ minHeight: isVerySmallScreen ? '88vh' : '80vh' }}>HomeDetail</Box>;
};

export default HomeDetail;
