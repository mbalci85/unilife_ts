import { Box } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const HomePage = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	return <Box sx={{ minHeight: isSmallScreen ? '88vh' : '80vh' }}>HomePage</Box>;
};

export default HomePage;
