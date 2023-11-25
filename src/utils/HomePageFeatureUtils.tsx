import { Box, Typography } from '@mui/material';
import React from 'react';

export const HomePageCommonFeatures = {
	homePageCommonFeatureGenerator: (Icon: React.ElementType, title: string, content: string) => {
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '70%',
					margin: '1rem 2rem 2rem 1rem',
					textAlign: 'center',
				}}>
				<Icon sx={{ color: '#3A5295', fontSize: '4rem' }} />
				<Typography variant='h6'>{title}</Typography>
				<Typography variant='body1' sx={{ textAlign: 'center', color: 'gray' }}>
					{content}
				</Typography>
			</Box>
		);
	},
};