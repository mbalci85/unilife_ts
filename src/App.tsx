import { Box } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home Page/HomePage';
import MediaQueryContextProvider from './contexts/MediaQueryContextProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllCities from './pages/All Cities/AllCities';
import CityDetails from './pages/City Details/CityDetails';
import HomeDetail from './pages/Home Detail/HomeDetail';
import AllCitiesContextProvider from './contexts/AllCitiesContextProvider';
import KeepInTouch from './components/KeepInTouch/KeepInTouch';

function App() {
	return (
		<Box>
			<MediaQueryContextProvider>
				<AllCitiesContextProvider>
					<Router>
						<Header />
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/all_cities' element={<AllCities />} />
							<Route path='/city/:city_id' element={<CityDetails />} />
							<Route path='/home/:id' element={<HomeDetail />} />
						</Routes>
						<KeepInTouch />
						<Footer />
					</Router>
				</AllCitiesContextProvider>
			</MediaQueryContextProvider>
		</Box>
	);
}

export default App;
