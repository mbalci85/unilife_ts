import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ShortlistedHomesContext } from '../../contexts/ShortlistContextProvider';
import { Property } from '../../interfaces/Property';
import axios from 'axios';
import PropertyCard from '../../components/Property Card/PropertyCard';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { useNavigate } from 'react-router-dom';

const ShortlistedHomes = () => {
	const { shortlistedHomesIds } = useContext(ShortlistedHomesContext);
	const { isSmallScreen } = useContext(MediaQueryContext);
	const navigate = useNavigate();
	const [shortlistedHomes, setShortlistedHomes] = useState<Property[]>([]);
	const [isNoShortlistedHomeDialogOpen, setIsNoShortlistedHomeDialogOpen] = useState<boolean>(false);

	const closeNoShortlistedHomeDialog = (): void => setIsNoShortlistedHomeDialogOpen(false);

	useEffect(() => {
		const singlePropertyBaseUrl = 'https://unilife-server.herokuapp.com/properties';

		Promise.all(
			shortlistedHomesIds.map(async (homeId) => {
				try {
					const response = await axios.get(`${singlePropertyBaseUrl}/${homeId}`);
					return response.data;
				} catch (error: any) {
					console.log(error);
				}
			})
		)
			.then((results) => setShortlistedHomes(results))
			.catch((error: any) => {
				if (error.response && error.response.status === 404) {
					console.log(error);
				}
			});
		if (shortlistedHomesIds.length === 0) setIsNoShortlistedHomeDialogOpen(true);
	}, [shortlistedHomesIds]);

	return (
		<Box>
			<Box sx={{ display: shortlistedHomesIds.length === 0 ? 'none' : null, marginTop: '2rem' }}>
				<Typography variant='h4' sx={{ textAlign: 'center' }}>
					Shortlisted Properties
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
					minHeight: '75vh',
					margin: '1rem 0',
				}}>
				{shortlistedHomes && shortlistedHomes.length > 0 ? (
					shortlistedHomes.map((property) => <PropertyCard property={property} key={property._id} />)
				) : (
					<Dialog open={isNoShortlistedHomeDialogOpen} onClose={closeNoShortlistedHomeDialog} maxWidth='md'>
						<DialogContent
							sx={{
								px: isSmallScreen ? '1rem' : '2rem',
								py: isSmallScreen ? '1rem' : '2rem',
								textAlign: 'center',
							}}>
							<Typography variant={isSmallScreen ? 'body1' : 'h6'} color='error'>
								Currently, there are no properties that have been shortlisted.
							</Typography>
						</DialogContent>
						<DialogActions>
							<Button
								variant='text'
								onClick={() => {
									navigate('/');
									window.scrollTo({ top: 0, behavior: 'smooth' });
								}}
								size='small'
								sx={{ margin: '0.5rem' }}>
								Go Home Page
							</Button>
						</DialogActions>
					</Dialog>
				)}
			</Box>
		</Box>
	);
};

export default ShortlistedHomes;
