export const SearchByCityFormStyle = (isSmallScreen: boolean, isMediumScreen: boolean) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: isSmallScreen ? '70vw' : '50vw',
	height: isSmallScreen ? '8rem' : isMediumScreen ? '6rem' : '5rem',
	border: 'solid  0.05rem',
	borderRadius: '1.25rem',
	padding: '1rem',
	backgroundColor: 'white',
	boxShadow: '0.1rem 0 0.2rem 0.2rem rgba(0, 0, 0, 0.3)',
	transition: '0.3s',
	':hover': {
		boxShadow: '0 0 0.3rem 0.3rem rgba(0, 0, 0, 0.4)',
	},
});
