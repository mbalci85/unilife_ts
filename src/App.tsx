import { lazy, Suspense } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MediaQueryContextProvider from './contexts/MediaQueryContextProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllCitiesContextProvider from './contexts/AllCitiesContextProvider';
import KeepInTouch from './components/KeepInTouch/KeepInTouch';

// Use React.lazy() to lazily load the components
const HomePage = lazy(() => import('./pages/Home Page/HomePage'));
const AllCities = lazy(() => import('./pages/All Cities/AllCities'));
const CityDetails = lazy(() => import('./pages/City Details/CityDetails'));
const HomeDetail = lazy(() => import('./pages/Home Detail/HomeDetail'));

function App() {
	return (
		<Box>
			<MediaQueryContextProvider>
				<AllCitiesContextProvider>
					<Router>
						<Header />
						<Suspense
							fallback={
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center',
										height: '90vh',
										backgroundColor: '#00A2E1',
										color: 'white',
									}}>
									<Box sx={{ marginBottom: '2rem' }}>
										<CircularProgress size='8rem' />
									</Box>
									<Typography variant='h4' sx={{ marginBottom: '2rem' }}>
										UNILIFE
									</Typography>
									<Typography variant='body1'>Loading...</Typography>
								</Box>
							}>
							<Routes>
								<Route path='/' element={<HomePage />} />
								<Route path='/all_cities' element={<AllCities />} />
								<Route path='/city/:city_id' element={<CityDetails />} />
								<Route path='/home/:id' element={<HomeDetail />} />
							</Routes>
							<KeepInTouch />
							<Footer />
						</Suspense>
					</Router>
				</AllCitiesContextProvider>
			</MediaQueryContextProvider>
		</Box>
	);
}

export default App;
