export const HomePageCityCardContainerStyles = (isSmallScreen: boolean) => ({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: isSmallScreen ? '13rem' : '17rem',
	width: isSmallScreen ? '18rem' : '25rem',
	margin: '1.5rem',
	borderRadius: '0.8rem',
	color: 'white',
	boxShadow: '0.1rem 0 0.3rem 0.1rem rgba(0, 0, 0, 0.6)',
	transition: '0.3s',
	cursor: 'pointer',
	':hover': {
		boxShadow: '0.2rem 0 0.5rem 0.2rem rgba(0, 0, 0, 0.7)',
	},
});

export const HomePageCityCardImgStyles = (): React.CSSProperties => ({
	//React.CSSProperties is necessary for CSS properties like objectFit
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: '0.8rem',
});

export const HomePageCityCardOverlayStyles = () => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0,0,0,0.5)',
	borderRadius: '0.8rem',
});
