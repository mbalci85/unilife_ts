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
				height: isSmallScreen ? '6rem' : '5rem',
				backgroundColor: 'black',
				color: 'white',
				padding: '0.3rem 0.7rem',
			}}>
			<Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' }}>
				<Typography
					variant={isSmallScreen ? 'body2' : 'body1'}
					sx={{ margin: isSmallScreen ? '0.4rem 0 0.4rem 0' : '0 1.25rem 0 0' }}>
					About Us
				</Typography>
				<Typography
					variant={isSmallScreen ? 'body2' : 'body1'}
					sx={{ margin: isSmallScreen ? '0 0 0.4rem 0' : '0 1.25rem 0 0 ' }}>
					Terms & Conditions
				</Typography>
				<Typography
					variant={isSmallScreen ? 'body2' : 'body1'}
					sx={{ margin: isSmallScreen ? '0 0 0.4rem 0' : null }}>
					Privacy & Cookie Policies
				</Typography>
			</Box>
			<Box>
				<Typography variant={isSmallScreen ? 'body2' : 'body1'}>2023@UniLife</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
