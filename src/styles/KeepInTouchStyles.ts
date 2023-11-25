export const KeepInTouchContainerStyles = (isSmallScreen: boolean) => ({
	display: 'flex',
	flexDirection: isSmallScreen ? 'column' : 'row',
	justifyContent: isSmallScreen ? null : 'center',
	backgroundColor: 'rgba(0, 162, 225, 1)',
	color: 'white',
	padding: '1rem 2rem',
});

export const KeepInTouchInputStyles = (isSmallScreen: boolean) => ({
	width: isSmallScreen ? '80%' : '50%',
	height: '2rem',
	border: 'none',
	borderRadius: '0.3rem',
	padding: '0.5rem',
});
