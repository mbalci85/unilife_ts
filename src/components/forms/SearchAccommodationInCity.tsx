import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface SearchAccommodationInCityProps {
	bedroom_count?: string;
	bathroom_count?: string;
	rent?: string;
	property_type?: string;
	setBedroomCount: React.Dispatch<React.SetStateAction<string>>;
	setBathroomCount: React.Dispatch<React.SetStateAction<string>>;
	setRent: React.Dispatch<React.SetStateAction<string>>;
	setPropertyTypeSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SearchAccommodationInCity = ({
	bedroom_count,
	bathroom_count,
	rent,
	property_type,
	setBedroomCount,
	setBathroomCount,
	setRent,
	setPropertyTypeSelected,
}: SearchAccommodationInCityProps) => {
	const [propertyTypes, setPropertyTypes] = useState<string[]>([]);

	useEffect(() => {
		const fetchPropertyTypes = async () => {
			try {
				const response = await axios.get('https://unilife-server.herokuapp.com/propertyTypes');
				const types = response.data.response.reduce((acc: string[], item: any) => {
					acc.push(item.name);
					return acc;
				}, []);

				setPropertyTypes(types);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPropertyTypes();
	}, []);
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<form
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
					border: 'solid gray 0.01rem',
					borderRadius: '1rem',
					backgroundColor: 'white',
					padding: '0.5rem 1rem 1rem 1rem',
					width: '80%',
				}}>
				<Box sx={{ width: '25%' }}>
					<FormControl fullWidth>
						<InputLabel id='bedroom_count' sx={{ lineHeight: 1 }}>
							Min Bedroom
						</InputLabel>
						<Select
							id='bedroom_count'
							label='Min Bedroom'
							size='small'
							value={bedroom_count}
							onChange={(e) => setBedroomCount(e.target.value)}
							sx={{ width: '90%' }}>
							{[1, 2, 3, 4, 5].map((num) => (
								<MenuItem value={num} key={num}>
									{num}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ width: '25%' }}>
					<FormControl fullWidth>
						<InputLabel id='bathroom_count' sx={{ lineHeight: 1 }}>
							Min Bathroom
						</InputLabel>
						<Select
							id='bathroom_count'
							label='Min Bathroom'
							size='small'
							value={bathroom_count}
							onChange={(e) => setBathroomCount(e.target.value)}
							sx={{ width: '90%' }}>
							{[1, 2, 3, 4, 5].map((num) => (
								<MenuItem value={num} key={num}>
									{num}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ width: '25%' }}>
					<FormControl fullWidth>
						<InputLabel id='rent' sx={{ lineHeight: 1 }}>
							Max Price
						</InputLabel>
						<Select
							id='rent'
							label='Max Price'
							size='small'
							value={rent}
							onChange={(e) => setRent(e.target.value)}
							sx={{ width: '90%' }}>
							{[500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 4000].map((num) => (
								<MenuItem value={num} key={num}>
									{num}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ width: '25%' }}>
					<FormControl fullWidth>
						<InputLabel id='property_type' sx={{ lineHeight: 1 }}>
							Property Type
						</InputLabel>
						<Select
							id='property_type'
							label='Property Type'
							size='small'
							value={property_type}
							onChange={(e) => setPropertyTypeSelected(e.target.value)}
							sx={{ width: '90%' }}>
							{propertyTypes.map((type) => (
								<MenuItem value={type} key={type}>
									{type}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Box>
			</form>
		</Box>
	);
};

export default SearchAccommodationInCity;
