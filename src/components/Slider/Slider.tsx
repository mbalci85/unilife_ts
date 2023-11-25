import { Box, Typography } from '@mui/material';
import backgroundImage from '../../assets/cover-img.png';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import SearchByCity from '../forms/SearchByCity';
import * as styles from '../../styles/SliderStyles';

interface SliderTextProps {
	sliderText: {
		title: string;
		subtitle: string;
	};
}

const Slider = ({ sliderText }: SliderTextProps) => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Box sx={styles.SliderContainerStyles(backgroundImage, isSmallScreen)}>
			<Box sx={styles.SliderOverlayStyles()}></Box>
			<Box sx={{ position: 'absolute', textAlign: 'center' }}>
				<Typography variant={isSmallScreen ? 'h5' : 'h4'} sx={{ marginBottom: '1rem' }}>
					{sliderText.title}
				</Typography>
				<Typography variant={isSmallScreen ? 'body1' : 'h6'}>{sliderText.subtitle}</Typography>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					bottom: '-3rem',
				}}>
				<SearchByCity />
			</Box>
		</Box>
	);
};

export default Slider;
