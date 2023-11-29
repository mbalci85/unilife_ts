import { Box, Typography } from '@mui/material';
import { City } from '../../interfaces/City';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import * as styles from '../../styles/HomePageCityCardStyles';

interface CityCardProps {
	city: City;
}

const HomePageCityCard = ({ city }: CityCardProps) => {
	const { isSmallScreen } = useContext(MediaQueryContext);

	const imagePlaceHolderUrl: string =
		'https://plus.unsplash.com/premium_photo-1679582754366-ae907574d052?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

	const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
		// Replace the failed image source with the placeholder image or handle the error as needed
		event.currentTarget.src = imagePlaceHolderUrl;
	};

	return (
		<Box sx={styles.HomePageCityCardContainerStyles(isSmallScreen)}>
			<img
				src={city.image_url}
				alt={city.name}
				onError={handleImageError}
				style={styles.HomePageCityCardImgStyles()}
			/>
			<Box sx={styles.HomePageCityCardOverlayStyles()}></Box>
			<Box sx={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography variant='h5'>{city.name}</Typography>
				{city.property_count && (
					<Typography variant='body1'>
						{city.property_count} {city.property_count > 1 ? 'properties' : 'property'}
					</Typography>
				)}
			</Box>
		</Box>
	);
};

export default HomePageCityCard;
