import { AppBar, Box, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import { FavoriteBorder, MailOutline } from '@mui/icons-material';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
const Header = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);

	return (
		<AppBar
			position='static'
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: isSmallScreen ? '6vh' : '10vh',
				backgroundColor: '#00A2E1',
			}}>
			<Box>
				<IconButton sx={{ color: 'white' }}>
					<HolidayVillageIcon sx={{ marginRight: '0.3rem' }} />
					<Typography>UniLife</Typography>
				</IconButton>
			</Box>
			{isSmallScreen ? (
				<HamburgerMenu />
			) : (
				<Box sx={{ display: 'flex' }}>
					<Box>
						<IconButton sx={{ color: 'white' }}>
							<FavoriteBorder sx={{ marginRight: '0.3rem' }} />
							<Typography>Shortlist</Typography>
						</IconButton>
					</Box>
					<Box>
						<IconButton sx={{ color: 'white' }}>
							<MailOutline sx={{ marginRight: '0.3rem' }} />
							<Typography>Contact Us</Typography>
						</IconButton>
					</Box>
				</Box>
			)}
		</AppBar>
	);
};

export default Header;
