import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Bathtub, Bed, Home, Place } from '@mui/icons-material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const PropertyCard = ({ property }: any) => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Card
			sx={{
				height: '22rem',
				width: isSmallScreen ? '90vw' : '22rem',
				margin: '2rem',
			}}>
			<CardMedia sx={{ height: '9rem' }} image={property.images[0]} title={property.property_description} />
			<CardContent sx={{ width: '100%', padding: 0 }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						backgroundColor: 'rgba(58, 82, 149, 1)',
						color: 'white',
						padding: '0.75rem',
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
								marginLeft: '0.7rem',
							}}>
							<Bed />
							<Typography variant='body2' sx={{ marginLeft: '0.2rem' }}>
								{property.bedroom_count}
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								marginLeft: '0.7rem',
							}}>
							<Bathtub />
							<Typography variant='body2' sx={{ marginLeft: '0.2rem' }}>
								{property.bathroom_count}
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							padding: '0.75rem',
						}}>
						<Typography variant='body1'>{property.property_type}</Typography>
						<Typography variant='body1'>{property.furnished}</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							padding: '0.75rem',
							borderBottom: 'solid lightgray 0.01rem',
						}}>
						<Place />
						<Typography variant='body2'>
							{property.address.street}, {property.address.city}, {property.address.postcode}
						</Typography>
					</Box>
				</Box>
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'center', padding: '0.2rem' }}>
				<IconButton>
					<Home />
					<Typography>View Home</Typography>
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default PropertyCard;
