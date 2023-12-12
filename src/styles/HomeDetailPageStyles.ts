export const sliderContainerStyles = (isMediumScreen: boolean) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: isMediumScreen ? '100%' : '50%',
	textAlign: 'center',
	my: isMediumScreen ? '1rem' : '2rem',
});

export const detailsContainerStyles = (isMediumScreen: boolean) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: isMediumScreen ? '90%' : '50%',
	mx: isMediumScreen ? '1rem' : '2rem',
	my: isMediumScreen ? '2rem' : '5rem',
});

export const detailsWithoutButtonsContainerStyles = () => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	border: 'solid lightgray 0.1rem',
	borderRadius: '0.5rem',
	width: '100%',
	py: '3rem',
	px: '1rem',
	my: '1rem',
});

export const homeDetailColumnBoxStyles = () => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	width: '100%',
});
