import { Box, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

export const HomeDetailPageUtils = {
	homeDetailBoxGenerator: (
		detailTitle: string,
		mediaQuery: boolean,
		IconName?: React.ElementType | null,
		detailContent?: string | number
	): ReactElement => {
		return (
			<Box sx={{ marginTop: '1.25rem' }}>
				<Typography variant='body1' sx={{ fontSize: { mediaQuery } ? '0.85rem' : null }}>
					{detailTitle}
				</Typography>
				<Box sx={{ display: 'flex', justifyContent: 'center', color: '#3A5295' }}>
					{IconName && <IconName sx={{ marginRight: '0.3rem' }} />}
					<Typography variant='body1' sx={{ fontSize: { mediaQuery } ? '0.85rem' : null }}>
						{detailContent}
					</Typography>
				</Box>
			</Box>
		);
	},
};
