import { AppBar, Badge, Box, Dialog, IconButton, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import { Favorite, FavoriteBorder, MailOutline } from '@mui/icons-material';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { useNavigate } from 'react-router-dom';
import { IconButtonUtils } from '../../utils/IconButtonUtils';
import ContactUs from '../forms/ContactUs';
import { ShortlistedHomesContext } from '../../contexts/ShortlistContextProvider';

const Header = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const { shortlistedHomesIds } = useContext(ShortlistedHomesContext);
	const navigate = useNavigate();

	const [isContactUsFormOpen, setIsContactUsFormOpen] = useState<boolean>(false);

	const openForm = (): void => setIsContactUsFormOpen(true);

	const closeForm = (): void => setIsContactUsFormOpen(false);

	return (
		<AppBar
			position='sticky'
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
					sx={{
						color: 'white',
						':hover': {
							backgroundColor: 'transparent',
						},
					}}
					onClick={() => {
						navigate('/');
					}}>
					<HolidayVillageIcon sx={{ marginRight: '0.3rem' }} />
					<Typography>UniLife</Typography>
				</IconButton>
			</Box>
			{isSmallScreen ? (
				<HamburgerMenu openForm={openForm} />
			) : (
				<Box sx={{ display: 'flex' }}>
					<Box>
						<IconButton
							sx={{
								color: 'white',
								':hover': {
									backgroundColor: 'transparent',
								},
							}}
							onClick={() => {
								navigate('/favorites');
								window.scrollTo({ top: 0, behavior: 'smooth' });
							}}>
							<Badge
								badgeContent={shortlistedHomesIds.length}
								color='error'
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}>
								{shortlistedHomesIds.length === 0 ? (
									<FavoriteBorder sx={{ marginRight: '0.3rem' }} />
								) : (
									<Favorite sx={{ marginRight: '0.3rem' }} />
								)}
							</Badge>
							<Typography variant='body2'>Shortlisted Properties</Typography>
						</IconButton>
					</Box>

					{IconButtonUtils.iconButtonGenerator(MailOutline, 'Contact Us', 'white', openForm)}
				</Box>
			)}

			<Dialog
				open={isContactUsFormOpen}
				onClose={closeForm}
				fullWidth
				maxWidth='md'
				sx={{ margin: isSmallScreen ? '0.5rem' : '2.5rem' }}>
				<ContactUs />
			</Dialog>
		</AppBar>
	);
};

export default Header;
