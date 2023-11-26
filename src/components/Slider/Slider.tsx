import { Box, Typography } from '@mui/material';
import backgroundImage from '../../assets/cover-img.png';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import * as styles from '../../styles/SliderStyles';

interface SliderTextProps {
	sliderText: {
		title: string;
		subtitle1: string;
		subtitle2: string;
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
				<Typography variant={isSmallScreen ? 'body1' : 'h6'}>{sliderText.subtitle1}</Typography>
				<Typography variant={isSmallScreen ? 'body1' : 'h6'}>{sliderText.subtitle2}</Typography>
			</Box>
		</Box>
	);
};

export default Slider;
