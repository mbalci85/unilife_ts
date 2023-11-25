import { FavoriteBorder, MailOutline } from '@mui/icons-material';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const HamburgerMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleDrawer = (): void => {
		setIsMenuOpen(!isMenuOpen);
	};

	const drawerListItemGenerator = (ItemIcon: React.ElementType, listItemText: string) => (
		<ListItem>
			<ListItemButton>
				<ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
					<ItemIcon sx={{ marginRight: '0.3rem' }} />
					<ListItemText primary={listItemText} />
				</ListItemIcon>
			</ListItemButton>
		</ListItem>
	);
	return (
		<Box>
			<Drawer anchor='right' open={isMenuOpen} onClose={toggleDrawer}>
				<List>
					{drawerListItemGenerator(FavoriteBorder, 'Shortlist')}
					{drawerListItemGenerator(MailOutline, 'Contact Us')}
				</List>
			</Drawer>
			<IconButton sx={{ color: 'white' }} onClick={toggleDrawer}>
				<MenuIcon />
			</IconButton>
		</Box>
	);
};

export default HamburgerMenu;
