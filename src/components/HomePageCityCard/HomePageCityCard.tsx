import { Box, Typography } from '@mui/material';
import { City } from '../../interfaces/City';

interface CityCardProps {
	city: City;
}

const HomePageCityCard = ({ city }: CityCardProps) => {
	const imagePlaceHolderUrl: string =
		'https://plus.unsplash.com/premium_photo-1679582754366-ae907574d052?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

	return (
		<Box
			sx={{
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '10rem',
				width: '70vw',
				margin: '1rem',
				padding: '1rem',
				borderRadius: '0.8rem',
				backgroundImage: `url(${city.image_url || imagePlaceHolderUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				color: 'white',
			}}>
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
				<Typography variant='h4'>{city.name}</Typography>
				<Typography variant='body1'>
					{city.property_count} {city.property_count > 1 ? 'properties' : 'property'}
				</Typography>
			</Box>
		</Box>
	);
};

export default HomePageCityCard;
