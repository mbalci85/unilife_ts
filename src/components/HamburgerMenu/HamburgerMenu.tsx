import { FavoriteBorder, MailOutline } from '@mui/icons-material';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const HamburgerMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleDrawer = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<Box>
			<Drawer anchor='right' open={isMenuOpen} onClose={toggleDrawer}>
				<List>
					<ListItem>
						<ListItemButton>
							<ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
								<FavoriteBorder sx={{ marginRight: '0.3rem' }} />
								<ListItemText primary='Shortlist' />
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
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
