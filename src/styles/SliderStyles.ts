export const SliderContainerStyles = (backgroundImage: string, isSmallScreen: boolean) => ({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	height: '15rem',
	backgroundImage: `url(${backgroundImage})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	color: 'white',
	paddingTop: isSmallScreen ? '2rem' : '5rem',
});

export const SliderOverlayStyles = () => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0,0,0,0.5)',
});
