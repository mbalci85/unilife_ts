import { ReceiptLongOutlined, Rule, TravelExploreOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const HomePageFeatures = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Box sx={{ margin: '3rem 1rem 2rem 1rem' }}>
			<Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '1rem' }}>
				Compare all inclusive student homes.
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: isSmallScreen ? 'column' : 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						width: '70%',
						margin: '1rem 2rem 2rem 1rem',
					}}>
					<TravelExploreOutlined sx={{ color: '#3A5295', fontSize: '4rem' }} />
					<Typography variant='h6'>Search</Typography>
					<Typography variant='body1' sx={{ textAlign: 'center' }}>
						Find your dream home in the perfect area near your university.
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						width: '70%',
						margin: '1rem 2rem 2rem 1rem',
					}}>
					<Rule fontSize='large' sx={{ color: '#3A5295', fontSize: '4rem' }} />
					<Typography variant='h6'>Compare</Typography>
					<Typography variant='body1' sx={{ textAlign: 'center' }}>
						Compare student accommodation to find the right home for you.
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						width: '70%',
						margin: '1rem 2rem 2rem 1rem',
					}}>
					<ReceiptLongOutlined fontSize='large' sx={{ color: '#3A5295', fontSize: '4rem' }} />
					<Typography variant='h6'>Bills Included</Typography>
					<Typography variant='body1' sx={{ textAlign: 'center' }}>
						Bills are included in all rent prices. No hidden fees.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default HomePageFeatures;
