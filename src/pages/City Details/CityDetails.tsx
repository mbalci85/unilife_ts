import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { City } from '../../interfaces/City';
import Slider from '../../components/Slider/Slider';
import { Property } from '../../interfaces/Property';
import SearchAccommodationInCity from '../../components/forms/SearchAccommodationInCity';
import PropertyCard from '../../components/Property Card/PropertyCard';
import student_life_img from '../../assets/student_life.png';

const CityDetails = () => {
	const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);
	const { city_id } = useParams();
	const [cityDetails, setCityDetails] = useState<City>();
	const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

	const [bedroom_count, setBedroomCount] = useState<string>('');
	const [bathroom_count, setBathroomCount] = useState<string>('');
	const [rent, setRent] = useState<string>('');
	const [property_type, setPropertyTypeSelected] = useState<string>('');

	const [isNoPropertyDialogOpen, setIsNoPropertyDialogOpen] = useState<boolean>(false);
	const closeNoPropertyDialog = () => setIsNoPropertyDialogOpen(false);

	const allCitiesBaseUrl: string = 'https://unilife-server.herokuapp.com/cities';

	const sliderText = {
		title: 'Search Accommodation',
		subtitle1: 'Whatever you’re after, we can help you find the right student accommodation for you. ',
		subtitle2: '',
	};

	const query = {
		city_id,
		bedroom_count: +bedroom_count,
		bathroom_count: +bathroom_count,
		property_type,
		rent: +rent,
	};

	useEffect(() => {
		const handlePropertyFilter = async () => {
			await axios
				.post('https://unilife-server.herokuapp.com/properties/filter', { query })
				.then((response) => {
					if (response.data.status !== 404) {
						setFilteredProperties(response.data.response);
					}
					if (response.data.response.length === 0) {
						setIsNoPropertyDialogOpen(true);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		};
		handlePropertyFilter();
	}, [bathroom_count, bedroom_count, property_type, rent]);

	useEffect(() => {
		const fetchCityDetails = async () => {
			try {
				const response = await axios.get(`${allCitiesBaseUrl}/${city_id}`);
				setCityDetails(response.data.data[0]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchCityDetails();
	}, []);
	return (
		<Box sx={{ minHeight: isVerySmallScreen ? '88vh' : '81vh' }}>
			{cityDetails && (
				<>
					<Box sx={{ width: '100%' }}>
						<Slider sliderText={sliderText} />
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: isSmallScreen ? '-5rem' : '-3rem',
								zIndex: 100,
							}}>
							<SearchAccommodationInCity
								bedroom_count={bedroom_count}
								bathroom_count={bathroom_count}
								rent={rent}
								property_type={property_type}
								setBedroomCount={setBedroomCount}
								setBathroomCount={setBathroomCount}
								setRent={setRent}
								setPropertyTypeSelected={setPropertyTypeSelected}
							/>
						</Box>
					</Box>

					<Box>
						<Box sx={{ textAlign: 'center', marginTop: '3rem' }}>
							<Typography variant='h5'>
								{cityDetails.property_count}
								{cityDetails.property_count && cityDetails?.property_count > 1
									? ' homes'
									: ' home'} in {cityDetails.name}
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'space-around',
								marginBottom: !(filteredProperties.length > 0) ? '6rem' : null,
							}}>
							{filteredProperties && filteredProperties.length > 0 ? (
								filteredProperties.map((property) => (
									<PropertyCard property={property} key={property._id} />
								))
							) : (
								<Dialog open={isNoPropertyDialogOpen} onClose={closeNoPropertyDialog} maxWidth='md'>
									<DialogContent
										sx={{
											px: isSmallScreen ? '1rem' : '2rem',
											py: isSmallScreen ? '1rem' : '2rem',
											textAlign: 'center',
										}}>
										<Typography variant={isSmallScreen ? 'body1' : 'h6'} color='error'>
											Unfortunately, there are no properties that meet the criteria specified in
											the query.
										</Typography>
									</DialogContent>
									<DialogActions>
										<Button
											variant='text'
											onClick={() => {
												setBedroomCount('');
												setBathroomCount('');
												setRent('');
												setPropertyTypeSelected('');
											}}
											size='small'
											sx={{ margin: '0.5rem' }}>
											Reset Search
										</Button>
									</DialogActions>
								</Dialog>
							)}
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: isSmallScreen ? 'column' : 'row',
							justifyContent: isSmallScreen ? 'center' : 'space-around',
							alignItems: 'center',
							backgroundColor: 'rgba(246, 250, 253, 1)',
							padding: '2rem',
							margin: '2rem',
							borderRadius: '2rem',
						}}>
						<Box sx={{ margin: '1rem', width: isSmallScreen ? '90%' : '50%' }}>
							<Typography variant='h5' sx={{ marginBottom: '2rem' }}>
								Being a student in {cityDetails.name}
							</Typography>
							<Typography variant='body1' sx={{ textAlign: 'justify' }}>
								{cityDetails.student_life}
							</Typography>
						</Box>
						<Box
							sx={{
								margin: '1rem',
								width: isSmallScreen ? '90%' : '50%',
								textAlign: 'center',
							}}>
							<img src={student_life_img} alt='stu_life_img' width='90%' />
						</Box>
					</Box>
				</>
			)}
		</Box>
	);
};

export default CityDetails;
