import { Box, Button, TextField, Typography } from '@mui/material';
import { Property } from '../../interfaces/Property';
import { ReactElement, useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

type BookViewingProps = {
	homeDetails: Property;
};

const BookViewing = ({ homeDetails }: BookViewingProps) => {
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
	return (
		<Box sx={{ padding: isSmallScreen ? '1rem' : '3rem' }}>
			<Box sx={{ width: '100%', marginBottom: '1.25rem' }}>
				<Typography variant='h6'>Book a Viewing</Typography>
				<Typography variant='body2'>
					{homeDetails.address.street}, {homeDetails.address.city},{homeDetails.address.postcode}
				</Typography>
			</Box>
			<Box
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
			</Box>
		</Box>
	);
};

export default BookViewing;
