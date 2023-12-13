import { Box, IconButton, Typography } from '@mui/material';
import { ReactElement } from 'react';

export const IconButtonUtils = {
	iconButtonGenerator: (
		IconName: React.ElementType,
		navItemName: string,
		color: string,
		OnClick: (id: string) => void
	): ReactElement => {
		return (
			<Box>
				<IconButton
					sx={{
						color: color,
						':hover': {
							backgroundColor: 'transparent',
						},
					}}
					onClick={() => OnClick('')}>
					<IconName sx={{ marginRight: '0.3rem' }} />
					<Typography variant='body2'>{navItemName}</Typography>
				</IconButton>
			</Box>
		);
	},
};
