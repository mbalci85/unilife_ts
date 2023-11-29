import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { City } from '../../interfaces/City';
import Slider from '../../components/Slider/Slider';
import { Property } from '../../interfaces/Property';
import SearchAccommodationInCity from '../../components/forms/SearchAccommodationInCity';
import PropertyCard from '../../components/Property Card/PropertyCard';

const CityDetails = () => {
	const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);
	const { city_id } = useParams();
	const [cityDetails, setCityDetails] = useState<City>();
	const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

	const [bedroom_count, setBedroomCount] = useState<string>('');
	const [bathroom_count, setBathroomCount] = useState<string>('');
	const [rent, setRent] = useState<string>('');
	const [property_type, setPropertyTypeSelected] = useState<string>('');

	const allCitiesBaseUrl: string = 'https://unilife-server.herokuapp.com/cities';

	const sliderText = {
		title: 'Search Accommodation',
		subtitle1: 'Whatever you’re after, we can help you find the right student accommodation for you. ',
		subtitle2: '',
	};

	useEffect(() => {
		const handlePropertyFilter = async () => {
			const query = {
				city_id,
				bedroom_count: +bedroom_count,
				bathroom_count: +bathroom_count,
				property_type,
				rent: +rent,
			};

			await axios
				.post('https://unilife-server.herokuapp.com/properties/filter', { query })
				.then((response) => {
					if (response.data.status !== 404) {
						setFilteredProperties(response.data.response);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		};
		handlePropertyFilter();
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
							}}>
							{filteredProperties &&
								filteredProperties.map((property) => (
									<PropertyCard property={property} key={property._id} />
								))}
						</Box>
					</Box>
				</>
			)}
		</Box>
	);
};

export default CityDetails;
