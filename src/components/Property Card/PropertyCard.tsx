import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Bathtub, Bed, Home, Place } from '@mui/icons-material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const PropertyCard = ({ property }: any) => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Card
			sx={{
				height: '18rem',
				width: isSmallScreen ? '90vw' : '20rem',
				margin: '3rem 2rem',
				paddingBottom: '2rem',
			}}>
			<CardMedia sx={{ height: '9rem' }} image={property.images[0]} title={property.property_description} />
			<CardContent sx={{ width: '100%', padding: 0 }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						backgroundColor: '#3A5295',
						color: 'white',
						padding: '0.5rem',
					}}>
					<Box>
						<Typography variant='body1'>£{(property.rent / property.bedroom_count).toFixed(2)}</Typography>
						<Typography variant='body2'>pppw including bills</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginLeft: '0.5rem',
							}}>
							<Bed />
							{property.bedroom_count}
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginLeft: '0.5rem',
							}}>
							<Bathtub />
							{property.bathroom_count}
						</Box>
					</Box>
				</Box>
				<Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
						<Typography>{property.property_type}</Typography>
						<Typography>{property.furnished}</Typography>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
						<Place />
						<Typography>
							{property.address.street}, {property.address.city}, {property.address.postcode}
						</Typography>
					</Box>
				</Box>
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
				<IconButton>
					<Home />
					<Typography>View Home</Typography>
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default PropertyCard;
