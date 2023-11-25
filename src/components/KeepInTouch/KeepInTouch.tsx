import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import axios from 'axios';
import * as styles from '../../styles/KeepInTouchStyles';
import { IconButtonUtils } from '../../utils/IconButtonUtils';

const KeepInTouch = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const [subscriptionEmail, setSubscriptionEmail] = useState<string>('');
	const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

	return (
		<Box sx={styles.KeepInTouchContainerStyles(isSmallScreen)}>
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
								if (response.status === 200 && response.statusText === 'OK') {
									setIsSubscribed(true);
									setSubscriptionEmail('');
								}
							})
							.catch((err) => {
								console.log(err);
							});
					}}>
					<input
						type='email'
						placeholder='Your Email'
						style={styles.KeepInTouchInputStyles(isSmallScreen)}
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
				{IconButtonUtils.iconButtonGenerator(Facebook, 'Facebook')}
				{IconButtonUtils.iconButtonGenerator(Twitter, 'Twitter')}
				{IconButtonUtils.iconButtonGenerator(Instagram, 'Instagram')}
			</Box>
		</Box>
	);
};

export default KeepInTouch;
