import { Favorite, FavoriteBorder, MailOutline } from '@mui/icons-material';
import {
	Badge,
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { ShortlistedHomesContext } from '../../contexts/ShortlistContextProvider';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = ({ openForm }: any) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const { shortlistedHomesIds } = useContext(ShortlistedHomesContext);
	const navigate = useNavigate();

	const toggleDrawer = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Box>
			<Drawer anchor='right' open={isMenuOpen} onClose={toggleDrawer}>
				<List>
					<ListItem>
						<ListItemButton
							onClick={() => {
								navigate('/favorites');
								window.scrollTo({ top: 0, behavior: 'smooth' });
								toggleDrawer();
							}}>
							<ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
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
								<ListItemText primary='Shortlisted Properties' />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton
							onClick={() => {
								openForm();
								toggleDrawer();
							}}>
							<ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
								<MailOutline sx={{ marginRight: '0.3rem' }} />
								<ListItemText primary='Contact Us' />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
			<IconButton sx={{ color: 'white' }} onClick={toggleDrawer}>
				<MenuIcon />
			</IconButton>
		</Box>
	);
};

export default HamburgerMenu;
