import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import Slider from '../../components/Slider/Slider';
import { AllCitiesContext } from '../../contexts/AllCitiesContextProvider';
import { City } from '../../interfaces/City';
import { useNavigate } from 'react-router-dom';
import * as styles from '../../styles/AllCitiesStyles';

const AllCities = () => {
	const { isVerySmallScreen } = useContext(MediaQueryContext);
	const navigate = useNavigate();
	const { allCities } = useContext(AllCitiesContext);

	const sliderText = {
		title: 'Student Accommodation',
		subtitle1: 'UniLife have student accommodation available across the UK.',
		subtitle2: 'Whatever you’re after, we can help you find the right student accommodation for you.',
	};

	return (
		<Box sx={{ minHeight: isVerySmallScreen ? '88vh' : '80vh' }}>
			<Slider sliderText={sliderText} />
			<Typography variant='h5' sx={{ textAlign: 'center', margin: '3rem 0 1.5rem 0' }}>
				Search by City
			</Typography>
			<Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
				{allCities &&
					allCities
						.sort((a: City, b: City) => a.name.localeCompare(b.name))
						.map((city, index) => {
							return (
								<Button
									variant='outlined'
									sx={styles.allCitiesBtnStyles()}
									key={city._id || index}
									onClick={() => {
										navigate(`/city/${city._id}`);
										window.scrollTo({ top: 0, behavior: 'smooth' });
									}}>
									{city.name}
								</Button>
							);
						})}
			</Box>
		</Box>
	);
};

export default AllCities;
