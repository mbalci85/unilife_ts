import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

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
	const { isSmallScreen } = useContext(MediaQueryContext);

	const searchBoxGenerator = (
		inputLabelId: string,
		inputLabel: string,
		value: string | undefined,
		OnChange: (value: string) => void,
		options: string[] | number[]
	): ReactElement => (
		<Box sx={{ width: isSmallScreen ? '80%' : '25%' }}>
			<FormControl fullWidth>
				<InputLabel id={inputLabelId} sx={{ lineHeight: 1 }}>
					{inputLabel}
				</InputLabel>
				<Select
					id={inputLabelId}
					label={inputLabel}
					size='small'
					value={value}
					onChange={(e) => OnChange(e.target.value)}
					sx={{ width: '90%', marginBottom: '0.75rem' }}>
					{options.map((option) => (
						<MenuItem value={option} key={option}>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);

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
		<Box sx={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
			<form
				style={{
					display: 'flex',
					flexDirection: isSmallScreen ? 'column' : 'row',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
					border: 'solid lightgray 0.01rem',
					borderRadius: '1rem',
					backgroundColor: 'white',
					width: '100%',
					padding: '1.5rem 1rem 1rem 1rem',
					boxShadow: '0.3rem 0 0.5rem 0.1rem rgba(0,0,0,0.2)',
				}}>
				{searchBoxGenerator('bedroom_count', 'Min Bedroom', bedroom_count, setBedroomCount, [1, 2, 3, 4, 5])}
				{searchBoxGenerator(
					'bathroom_count',
					'Min Bathroom',
					bathroom_count,
					setBathroomCount,
					[1, 2, 3, 4, 5]
				)}

				{searchBoxGenerator(
					'rent',
					'Max Price',
					rent,
					setRent,
					[500, 600, 700, 800, 900, 1000, 1500, 2000, 2500, 3000, 4000]
				)}
				{searchBoxGenerator(
					'property_type',
					'Property Type',
					property_type,
					setPropertyTypeSelected,
					propertyTypes
				)}
			</form>
		</Box>
	);
};

export default SearchAccommodationInCity;
