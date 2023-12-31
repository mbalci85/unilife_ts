import { Box, Button, Dialog, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Property } from '../../interfaces/Property';
import {
	Bathtub,
	Bed,
	CheckCircleOutlined,
	ChevronLeft,
	ChevronRight,
	Favorite,
	FavoriteBorderOutlined,
} from '@mui/icons-material';
import BookViewing from '../../components/forms/BookViewing';
import * as styles from '../../styles/HomeDetailPageStyles';
import { HomeDetailPageUtils } from '../../utils/HomeDetailPageUtils';
import { ShortlistedHomesContext } from '../../contexts/ShortlistContextProvider';

const HomeDetail = () => {
	const { isVerySmallScreen, isMediumScreen, isSmallScreen } = useContext(MediaQueryContext);
	const { shortlistedHomesIds, handleShortlistedHomes } = useContext(ShortlistedHomesContext);
	const { id } = useParams();
	const navigate = useNavigate();

	const [homeDetails, setHomeDetails] = useState<Property>();
	const [imgIndex, setImageIndex] = useState<number>(0);
	const [bedroomPrices, setBedroomsPrices] = useState<number[]>([]);
	const [isViewingFormOpen, setIsViewingFormOpen] = useState<boolean>(false);

	const openForm = (): void => setIsViewingFormOpen(true);
	const closeForm = (): void => setIsViewingFormOpen(false);

	const homeDetailBaseUrl = 'https://unilife-server.herokuapp.com/properties';

	useEffect(() => {
		const fetchHomeDetails = async (): Promise<void> => {
			try {
				const response = await axios.get(`${homeDetailBaseUrl}/${id}`);
				setHomeDetails(response.data);
				setImageIndex(response.data.images.length - 1);
				setBedroomsPrices(Object.values(response.data.bedroom_prices));
			} catch (error) {
				console.log(error);
			}
		};
		fetchHomeDetails();
	}, []);

	return (
		<Box sx={{ minHeight: isVerySmallScreen ? '88vh' : '80vh' }}>
			{homeDetails && (
				<Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: isMediumScreen ? 'column' : 'row',
							alignItems: 'flex-start',
						}}>
						<Box sx={styles.sliderContainerStyles(isMediumScreen)}>
							<Button
								variant='text'
								sx={{
									textTransform: 'capitalize',
									alignSelf: 'flex-start',
									my: '0.75rem',
									':hover': { backgroundColor: 'transparent' },
								}}
								startIcon={<ChevronLeft />}
								onClick={() => {
									navigate(`/city/${homeDetails.city_id?._id}`);
								}}>
								Back to Search
							</Button>
							<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<ChevronLeft
									fontSize='large'
									sx={{ color: '#3A5295', cursor: 'pointer' }}
									onClick={() => {
										setImageIndex(imgIndex - 1 >= 0 ? imgIndex - 1 : imgIndex);
									}}
								/>
								<img
									src={homeDetails.images[imgIndex]}
									alt='main_img'
									style={{ width: '90%', borderRadius: '0.75rem' }}
								/>
								<ChevronRight
									fontSize='large'
									sx={{ color: '#3A5295', cursor: 'pointer' }}
									onClick={() => {
										setImageIndex(
											imgIndex + 1 <= homeDetails.images.length - 1 ? imgIndex + 1 : imgIndex
										);
									}}
								/>
							</Box>
							<Box>
								{homeDetails?.images.map((image, index) => {
									return (
										<img
											src={image}
											alt='prop_img'
											style={{
												margin: '0.2rem',
												width: '21%',
												borderRadius: '0.5rem',
												cursor: 'pointer',
											}}
											key={index}
											onClick={() => {
												setImageIndex(index);
											}}
										/>
									);
								})}
							</Box>
						</Box>
						<Box sx={styles.detailsContainerStyles(isMediumScreen)}>
							<Box sx={styles.detailsWithoutButtonsContainerStyles()}>
								<Box
									sx={{
										py: isMediumScreen ? '1rem' : '2rem',
										borderBottom: 'solid lightgray 0.1rem',
									}}>
									<Typography variant={isMediumScreen ? 'h5' : 'h4'}>
										{homeDetails.address.street}, {homeDetails.address.city},
										{homeDetails.address.postcode}
									</Typography>
								</Box>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										width: '100%',
									}}>
									<Box sx={styles.homeDetailColumnBoxStyles()}>
										{HomeDetailPageUtils.homeDetailBoxGenerator(
											'Bedroom',
											isMediumScreen,
											Bed,
											homeDetails.bedroom_count
										)}
										{HomeDetailPageUtils.homeDetailBoxGenerator(
											'Price',
											isMediumScreen,
											null,
											`£${homeDetails.rent}`
										)}
									</Box>
									<Box sx={styles.homeDetailColumnBoxStyles()}>
										{HomeDetailPageUtils.homeDetailBoxGenerator(
											'Bathrooms',
											isMediumScreen,
											Bathtub,
											homeDetails.bathroom_count
										)}
										{HomeDetailPageUtils.homeDetailBoxGenerator(
											'Furnished Type',
											isMediumScreen,
											null,
											homeDetails.furnished
										)}
									</Box>
									<Box sx={styles.homeDetailColumnBoxStyles()}>
										{HomeDetailPageUtils.homeDetailBoxGenerator(
											'Property Type',
											isMediumScreen,
											null,
											homeDetails.property_type
										)}
										{HomeDetailPageUtils.homeDetailBoxGenerator(
											'Available from',
											isMediumScreen,
											null,
											homeDetails.availability
										)}
									</Box>
								</Box>
							</Box>

							<Box>
								<Button
									startIcon={
										shortlistedHomesIds.includes(homeDetails._id) ? (
											<Favorite sx={{ color: 'red' }} />
										) : (
											<FavoriteBorderOutlined />
										)
									}
									variant='outlined'
									size={isMediumScreen ? 'small' : 'medium'}
									sx={{
										marginRight: '0.75rem',
										textTransform: 'capitalize',
										color: shortlistedHomesIds.includes(homeDetails._id) ? 'red' : null,
										':hover': {
											backgroundColor: shortlistedHomesIds.includes(homeDetails._id)
												? 'lightgray'
												: '#3A5295',
											color: shortlistedHomesIds.includes(homeDetails._id) ? 'red' : '#FFFF',
										},
									}}
									onClick={() => handleShortlistedHomes(homeDetails._id)}>
									{shortlistedHomesIds.includes(homeDetails._id) ? 'Shortlisted' : 'Shortlist'}
								</Button>
								<Button
									variant='outlined'
									size={isMediumScreen ? 'small' : 'medium'}
									sx={{
										textTransform: 'capitalize',
										':hover': {
											backgroundColor: '#3A5295',
											color: '#FFFF',
										},
									}}
									onClick={openForm}>
									Book Viewing
								</Button>
								<Dialog
									open={isViewingFormOpen}
									onClose={closeForm}
									fullWidth
									maxWidth='md'
									sx={{ margin: isSmallScreen ? '0.5rem' : '2.5rem' }}>
									<BookViewing homeDetails={homeDetails} />
								</Dialog>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: isMediumScreen ? 'center' : 'flex-start',
							flexDirection: isMediumScreen ? 'column' : 'row',
						}}>
						<Box sx={{ display: 'flex', flexDirection: 'column', width: isMediumScreen ? '90%' : '70%' }}>
							<Box
								sx={{
									mx: '2rem',
									my: isMediumScreen ? '2rem' : '5rem',
								}}>
								<Typography variant='h6' sx={{ marginBottom: '0.6rem', color: '#3A5295' }}>
									Description
								</Typography>
								<Typography sx={{ lineHeight: '1.7', textAlign: 'justify' }}>
									{homeDetails.property_description}
								</Typography>
							</Box>
							<Box sx={{ margin: isMediumScreen ? '0 0 0 2rem' : '0 0 2rem 2rem' }}>
								<Typography variant='h6' sx={{ color: '#3A5295' }}>
									Key Features
								</Typography>
								{homeDetails.key_features.map((feature, index) => {
									return (
										<Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
											<CheckCircleOutlined sx={{ marginRight: '0.3rem', color: '#3A5295' }} />
											<Typography variant='body2' sx={{ margin: '0.75rem 0' }}>
												{feature}
											</Typography>
										</Box>
									);
								})}
							</Box>
						</Box>
						<Box
							sx={{
								mx: '2rem',
								my: isMediumScreen ? '2rem' : '5rem',
								width: isMediumScreen ? '80%' : '70%',
							}}>
							<Typography variant='h6' sx={{ marginBottom: '0.6rem', color: '#3A5295' }}>
								Bedroom Prices
							</Typography>
							{homeDetails.bedroom_prices && (
								<Box
									sx={{
										border: 'lightgray 0.1rem solid',
										borderRadius: '0.5rem',
										padding: '0.4rem',
									}}>
									{bedroomPrices.map((price, index) => {
										return (
											<Box
												key={index}
												sx={{
													display: 'flex',
													justifyContent: 'space-between',
													padding: '0.5rem 1.25rem',
													borderBottom:
														index + 1 === bedroomPrices.length
															? null
															: 'lightgray 0.1rem solid',
												}}>
												<Box>
													<Typography>Bedroom {index + 1}</Typography>
												</Box>
												<Box>
													<Typography>£{price} per week</Typography>
												</Box>
											</Box>
										);
									})}
								</Box>
							)}
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default HomeDetail;
