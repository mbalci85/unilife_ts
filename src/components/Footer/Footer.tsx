import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const Footer = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: isSmallScreen ? '13vh' : '10vh',
				backgroundColor: 'black',
				color: 'white',
				padding: '0.3rem 0.7rem',
			}}>
			<Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' }}>
				<Typography sx={{ marginRight: isSmallScreen ? null : '1.25rem' }}>About Us</Typography>
				<Typography sx={{ marginRight: isSmallScreen ? null : '1.25rem' }}>Terms & Conditions</Typography>
				<Typography>Privacy & Cookie Policies</Typography>
			</Box>
			<Box>2023 @ UniLife</Box>
		</Box>
	);
};

export default Footer;
