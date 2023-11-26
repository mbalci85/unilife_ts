import { Box, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { useParams } from 'react-router-dom';
import { AllCitiesContext } from '../../contexts/AllCitiesContextProvider';
import axios from 'axios';
import { City } from '../../interfaces/City';
import Slider from '../../components/Slider/Slider';

const CityDetails = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	const { allCitiesBaseUrl } = useContext(AllCitiesContext);
	const { id } = useParams();
	const [cityDetails, setCityDetails] = useState<City>();

	const sliderText = {
		title: 'Search Accommodation',
		subtitle1: 'Whatever you’re after, we can help you find the right student accommodation for you. ',
		subtitle2: '',
	};

	useEffect(() => {
		const fetchCityDetails = async () => {
			const response = await axios.get(`${allCitiesBaseUrl}/${id}`);
			setCityDetails(response.data.data[0]);
		};
		fetchCityDetails();
	}, []);
	return (
		<Box sx={{ minHeight: isVerySmallScreen ? '88vh' : '81vh' }}>
			{cityDetails && (
				<>
					<Slider sliderText={sliderText} />
					<Typography variant='h5'>
						{cityDetails?.property_count}
						{cityDetails.property_count && cityDetails?.property_count > 1 ? ' homes' : ' home'} in{' '}
						{cityDetails.name}
					</Typography>
				</>
			)}
		</Box>
	);
};

export default CityDetails;
