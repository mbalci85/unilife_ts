import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { ReactElement } from 'react';

export const IconButtonUtils = {
	iconButtonGenerator: (
		IconName: React.ElementType,
		navItemName: string,
		color: string,
		OnClick: (id: string) => void,
		tooltipTitle: string
	): ReactElement => {
		return (
			<Box>
				<Tooltip title={tooltipTitle} placement='right-start'>
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
				</Tooltip>
			</Box>
		);
	},
};
