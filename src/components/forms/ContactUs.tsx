import { Box, Button, FormControl, TextField, Typography, TypographyProps } from '@mui/material';
import { ReactElement, useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const ContactUs = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);

	const inputGenerator = (label: string, type: string): ReactElement => (
		<Box>
			<TextField
				label={label}
				variant='outlined'
				type={type}
				size='small'
				required
				sx={{ width: '100%', marginBottom: '1rem' }}
			/>
		</Box>
	);

	const textGenerator = (content: string, variant: TypographyProps['variant']): ReactElement => (
		<Typography variant={variant} sx={{ marginBottom: '0.5rem' }}>
			{content}
		</Typography>
	);
	return (
		<Box sx={{ padding: isSmallScreen ? '1rem' : '3rem' }}>
			<Box sx={{ marginBottom: '1rem' }}>
				{textGenerator('Contact Us', 'h5')}
				{textGenerator('Feel free to contact us if you have any questions.', 'body2')}
				{textGenerator('Looking forward to hear from you.', 'body2')}
			</Box>
			<form>
				<FormControl
					sx={{
						display: 'flex',
						flexDirection: isSmallScreen ? 'column' : 'row',
						justifyContent: 'space-between',
					}}>
					<Box sx={{ width: isSmallScreen ? '90%' : '45%' }}>
						{inputGenerator('Name', 'text')}
						{inputGenerator('Email', 'email')}
						{inputGenerator('Phone Number', 'text')}
					</Box>
					<Box sx={{ width: isSmallScreen ? '90%' : '45%' }}>
						<Box>
							<TextField
								label='Message'
								variant='outlined'
								type='text'
								required
								multiline
								rows={5}
								sx={{ width: '100%', marginBottom: '1rem' }}
							/>
						</Box>
						<Button
							type='submit'
							sx={{
								backgroundColor: '#3A5295',
								width: '100%',
								height: '2.25rem',
								color: 'white',
								textTransform: 'capitalize',
								':hover': {
									backgroundColor: '#00A2E1',
								},
							}}>
							Submit
						</Button>
					</Box>
				</FormControl>
			</form>
		</Box>
	);
};

export default ContactUs;
