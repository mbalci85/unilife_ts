import { AppBar, Box, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import { FavoriteBorder, MailOutline } from '@mui/icons-material';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { useNavigate } from 'react-router-dom';
import { IconButtonUtils } from '../../utils/IconButtonUtils';

const Header = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const navigate = useNavigate();

	return (
		<AppBar
			position='static'
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: isSmallScreen ? '3rem' : '4rem',
				backgroundColor: '#00A2E1',
			}}>
			<Box>
				<IconButton
					sx={{ color: 'white' }}
					onClick={() => {
						navigate('/');
					}}>
					<HolidayVillageIcon sx={{ marginRight: '0.3rem' }} />
					<Typography>UniLife</Typography>
				</IconButton>
			</Box>
			{isSmallScreen ? (
				<HamburgerMenu />
			) : (
				<Box sx={{ display: 'flex' }}>
					{IconButtonUtils.iconButtonGenerator(FavoriteBorder, 'Shortlist')}
					{IconButtonUtils.iconButtonGenerator(MailOutline, 'Contact Us')}
				</Box>
			)}
		</AppBar>
	);
};

export default Header;
