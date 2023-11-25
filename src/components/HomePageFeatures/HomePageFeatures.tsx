import {
	CottageOutlined,
	FavoriteBorderOutlined,
	ReceiptLongOutlined,
	Rule,
	TravelExploreOutlined,
} from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import Img from '../../assets/Feature Pic.png';
import { HomePageCommonFeatures } from '../../utils/HomePageFeatureUtils';

const HomePageFeatures = () => {
	const { isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);
	return (
		<Box sx={{ margin: '4rem 6rem 0rem 6rem' }}>
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
				{HomePageCommonFeatures.homePageCommonFeatureGenerator(
					TravelExploreOutlined,
					'Search',
					'Find your dream home in the perfect area near your university.'
				)}
				{HomePageCommonFeatures.homePageCommonFeatureGenerator(
					Rule,
					'Compare',
					'Compare student accommodation to find the right home for you.'
				)}

				{HomePageCommonFeatures.homePageCommonFeatureGenerator(
					ReceiptLongOutlined,
					'Bills Included',
					'Bills are included in all rent prices. No hidden fees.'
				)}
			</Box>
			{!isMediumScreen ? (
				<Box sx={{ display: 'flex', margin: '3rem 2rem 0 2rem' }}>
					<Box>
						<Box sx={{ display: 'flex', margin: '3rem', width: '70%' }}>
							<CottageOutlined sx={{ color: '#3A5295', fontSize: '3rem', marginRight: '0.75rem' }} />
							<Box>
								<Typography variant='h6'>Best selection</Typography>
								<Typography variant='body2' sx={{ color: 'gray' }}>
									Best selection of student accommodations. Never been easier to find a home that’s
									right for you.
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: 'flex', margin: '3rem', width: '70%' }}>
							<FavoriteBorderOutlined
								sx={{ color: '#3A5295', fontSize: '3rem', marginRight: '0.75rem' }}
							/>
							<Box>
								<Typography variant='h6'>Your favorite</Typography>
								<Typography variant='body2' sx={{ color: 'gray' }}>
									Shortlist your favorite properties and send enquiries in one click.
								</Typography>
							</Box>
						</Box>
						<Button
							sx={{
								backgroundColor: '#3A5295',
								color: '#FFFFFF',
								padding: '0.5rem 1rem',
								marginLeft: '3.5rem',
								':hover': {
									backgroundColor: 'rgba(0, 162, 225, 1)',
								},
							}}
							onClick={() => {
								window.scrollTo({ top: 0, behavior: 'smooth' });
							}}>
							Search & Compare
						</Button>
					</Box>
					<Box>
						<img src={Img} alt='feat_img' />
					</Box>
				</Box>
			) : null}
		</Box>
	);
};

export default HomePageFeatures;
