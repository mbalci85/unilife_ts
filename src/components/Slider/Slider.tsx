import { Box, Typography } from '@mui/material';
import backgroundImage from '../../assets/cover-img.png';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import SearchByCity from '../forms/SearchByCity';

interface SliderTextProps {
	sliderText: {
		title: string;
		subtitle: string;
	};
}

const Slider = ({ sliderText }: SliderTextProps) => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Box
			sx={{
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				height: '15rem',
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				color: 'white',
				paddingTop: isSmallScreen ? '2rem' : '5rem',
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
				<Typography variant={isSmallScreen ? 'h5' : 'h4'} sx={{ marginBottom: '1rem' }}>
					{sliderText.title}
				</Typography>
				<Typography variant={isSmallScreen ? 'body1' : 'h6'}>{sliderText.subtitle}</Typography>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					bottom: '-4rem',
				}}>
				<SearchByCity />
			</Box>
		</Box>
	);
};

export default Slider;
