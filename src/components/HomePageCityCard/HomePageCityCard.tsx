import { Box, Typography } from '@mui/material';
import { City } from '../../interfaces/City';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

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
		<Box
			sx={{
				position: 'relative',
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				height: isSmallScreen ? '10rem' : '13rem',
				width: isSmallScreen ? '70vw' : '30vw',
				margin: '1rem',
				borderRadius: '0.8rem',
				color: 'white',
				boxShadow: '0.1rem 0 0.3rem 0.1rem rgba(0, 0, 0, 0.6)',
				transition: '0.3s',
				':hover': {
					boxShadow: '0.2rem 0 0.5rem 0.2rem rgba(0, 0, 0, 0.7)',
				},
			}}>
			<img
				src={city.image_url}
				alt={city.name}
				onError={handleImageError}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					borderRadius: '0.8rem',
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0,0,0,0.5)',
					borderRadius: '0.8rem',
				}}></Box>
			<Box sx={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography variant='h5'>{city.name}</Typography>
				<Typography variant='body1'>
					{city.property_count} {city.property_count > 1 ? 'properties' : 'property'}
				</Typography>
			</Box>
		</Box>
	);
};

export default HomePageCityCard;
