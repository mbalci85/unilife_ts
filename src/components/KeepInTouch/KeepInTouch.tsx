import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const KeepInTouch = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const [subscriptionEmail, setSubscriptionEmail] = useState<string>('');
	const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: isSmallScreen ? 'column' : 'row',
				backgroundColor: 'rgba(0, 162, 225, 1)',
				color: 'white',
				padding: '1rem 2rem',
				marginTop: '1rem',
			}}>
			<Box sx={{ marginBottom: '2rem' }}>
				<Typography variant='h6' sx={{ marginBottom: '1rem' }}>
					Keep in touch
				</Typography>
				<Typography variant='body2' sx={{ marginBottom: '1rem' }}>
					Curious about new offerings? Sign up for our weekly newsletter and stay informed.
				</Typography>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setIsSubscribed(true);
						setSubscriptionEmail('');
					}}>
					<input
						type='email'
						placeholder='Your Email'
						style={{
							width: '80%',
							height: '2rem',
							border: 'none',
							borderRadius: '0.3rem',
							padding: '0.5rem',
						}}
						value={subscriptionEmail}
						onChange={(e) => {
							setSubscriptionEmail(e.target.value);
							setIsSubscribed(false);
						}}
					/>
				</form>
				{isSubscribed ? (
					<Typography variant='body2' sx={{ color: 'lightgreen', marginTop: '0.5rem' }}>
						Done! Thanks for subscribing to our newsletter.
					</Typography>
				) : null}
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
				<Typography variant='h6'>Let's Socialize</Typography>
				<IconButton sx={{ color: 'white' }}>
					<FacebookOutlined sx={{ marginRight: '0.3rem' }} />
					<Typography variant='body2'>Facebook</Typography>
				</IconButton>
				<IconButton sx={{ color: 'white' }}>
					<Twitter sx={{ marginRight: '0.3rem' }} />
					<Typography variant='body2'>Twitter</Typography>
				</IconButton>
				<IconButton sx={{ color: 'white' }}>
					<Instagram sx={{ marginRight: '0.3rem' }} />
					<Typography variant='body2'>Instagram</Typography>
				</IconButton>
			</Box>
		</Box>
	);
};

export default KeepInTouch;
