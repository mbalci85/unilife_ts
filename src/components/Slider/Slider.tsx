import { Box, Typography } from '@mui/material';
import backgroundImage from '../../assets/cover-img.png';

const Slider = () => {
	return (
		<Box
			sx={{
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				height: '40vh',
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				color: 'white',
				paddingTop: '5rem',
			}}>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0,0,0,0.5)',
				}}></Box>
			<Box sx={{ position: 'absolute', textAlign: 'center' }}>
				<Typography variant='h4' sx={{ marginBottom: '1rem' }}>
					Find student homes with bills included
				</Typography>
				<Typography variant='h6'>A simple and faster way to search for student accommodation</Typography>
			</Box>
		</Box>
	);
};

export default Slider;
