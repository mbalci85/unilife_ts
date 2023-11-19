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

function App() {
	return (
		<Box>
			<MediaQueryContextProvider>
				<Router>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/all_cities' element={<AllCities />} />
						<Route path='/city/:name' element={<CityDetails />} />
						<Route path='/home/:id' element={<HomeDetail />} />
					</Routes>
					<Footer />
				</Router>
			</MediaQueryContextProvider>
		</Box>
	);
}

export default App;
