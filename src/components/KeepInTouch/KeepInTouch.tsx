import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import axios from 'axios';

const KeepInTouch = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const [subscriptionEmail, setSubscriptionEmail] = useState<string>('');
	const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: isSmallScreen ? 'column' : 'row',
				justifyContent: isSmallScreen ? null : 'center',
				backgroundColor: 'rgba(0, 162, 225, 1)',
				color: 'white',
				padding: '1rem 2rem',
			}}>
			<Box sx={{ marginBottom: '2rem', width: isSmallScreen ? '100%' : '70%' }}>
				<Typography variant='h6' sx={{ marginBottom: '1rem' }}>
					Keep in touch
				</Typography>
				<Typography variant='body2' sx={{ marginBottom: '1rem' }}>
					Curious about new offerings? Sign up for our weekly newsletter and stay informed.
				</Typography>
				<form
					onSubmit={async (e) => {
						e.preventDefault();

						await axios
							.post('https://unilife-server.herokuapp.com/subscriptions', {
								email: subscriptionEmail,
							})
							.then((response) => {
								setIsSubscribed(true);
								setSubscriptionEmail('');
								console.log(response);
							})
							.catch((err) => {
								console.log(err);
							});
					}}>
					<input
						type='email'
						placeholder='Your Email'
						style={{
							width: isSmallScreen ? '80%' : '50%',
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
