import { Box, Typography } from '@mui/material';
import { City } from '../../interfaces/City';

interface CityCardProps {
	city: City;
}

const HomePageCityCard = ({ city }: CityCardProps) => {
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
				backgroundImage: `url(${city.image_url})`,
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
				<Typography variant='h6'>{city.name}</Typography>
				<Typography variant='body2'>
					{city.property_count} {city.property_count > 1 ? 'properties' : 'property'}
				</Typography>
			</Box>
		</Box>
	);
};

export default HomePageCityCard;
