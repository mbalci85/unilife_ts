import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Bathtub, Bed, Favorite, FavoriteBorder, Home, Place } from '@mui/icons-material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { useNavigate } from 'react-router-dom';
import { IconButtonUtils } from '../../utils/IconButtonUtils';
import { ShortlistedHomesContext } from '../../contexts/ShortlistContextProvider';

const PropertyCard = ({ property }: any) => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const { shortlistedHomesIds, handleShortlistedHomes } = useContext(ShortlistedHomesContext);
	const navigate = useNavigate();

	const boxStyling = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: '0.7rem',
	};

	const boxGenerator = (Icon: React.ElementType, count: string): JSX.Element => (
		<Box sx={boxStyling}>
			<Icon />
			<Typography variant='body2' sx={{ marginLeft: '0.2rem' }}>
				{count}
			</Typography>
		</Box>
	);

	return (
		<Card
			sx={{
				height: '25rem',
				width: isSmallScreen ? '80vw' : '23rem',
				margin: '2rem',
			}}>
			<CardMedia sx={{ height: '12rem' }} image={property.images[0]} title={property.property_description} />
			<CardContent sx={{ width: '100%', padding: 0 }}>
				<Box
					sx={{
						...boxStyling,
						backgroundColor: 'rgba(58, 82, 149, 1)',
						color: 'white',
					}}>
					<Box>
						<Typography variant='body1'>£{(property.rent / property.bedroom_count).toFixed(2)}</Typography>
						<Typography variant='body2'>pppw including bills</Typography>
					</Box>
					<Box
						sx={{
							...boxStyling,
							padding: 0,
						}}>
						{boxGenerator(Bed, property.bedroom_count)}
						{boxGenerator(Bathtub, property.bathroom_count)}
					</Box>
				</Box>
				<Box>
					<Box sx={boxStyling}>
						<Typography variant='body1'>{property.property_type}</Typography>
						<Typography variant='body1'>{property.furnished}</Typography>
					</Box>
					<Box
						sx={{
							...boxStyling,
							justifyContent: 'center',
							borderBottom: 'solid lightgray 0.01rem',
						}}>
						<Place sx={{ marginRight: '0.3rem' }} />
						<Typography variant='body2'>
							{property.address.street}, {property.address.city}, {property.address.postcode}
						</Typography>
					</Box>
				</Box>
			</CardContent>
			<CardActions
				sx={{
					display: 'flex',
					justifyContent: 'center',
					padding: '0.2rem',
				}}>
				<IconButton
					sx={{
						':hover': {
							backgroundColor: 'transparent',
						},
					}}
					onClick={() => {
						navigate(`/home/${property._id}`);
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}>
					<Home />
					<Typography>View Home</Typography>
				</IconButton>
				{IconButtonUtils.iconButtonGenerator(
					shortlistedHomesIds.includes(property._id) ? Favorite : FavoriteBorder,
					shortlistedHomesIds.includes(property._id) ? 'Shortlisted' : 'Shortlist',
					shortlistedHomesIds.includes(property._id) ? 'red' : 'gray',
					() => handleShortlistedHomes(property._id)
				)}
			</CardActions>
		</Card>
	);
};

export default PropertyCard;
