import { ReactNode, createContext, useEffect, useState } from 'react';
import { City } from '../interfaces/City';
import axios, { AxiosResponse } from 'axios';

type Cities = City[];

interface AllCitiesContextTypes {
	allCities: Cities;
	allCityNames: string[];
}

interface AllCitiesContextProviderProps {
	children: ReactNode;
}

export const AllCitiesContext = createContext<AllCitiesContextTypes>({ allCities: [], allCityNames: [] });

const AllCitiesContextProvider = (props: AllCitiesContextProviderProps) => {
	const [allCities, setAllCities] = useState<Cities>([]);
	const [allCityNames, setAllCityNames] = useState<string[]>([]);
	const allCitiesBaseUrl: string = 'https://unilife-server.herokuapp.com/cities';

	useEffect(() => {
		const fetchCities = async (): Promise<void> => {
			const allCitiesData: AxiosResponse<any, any> = await axios.get(allCitiesBaseUrl);

			const totalNumberOfCities: number = await allCitiesData.data.total;

			const response = await axios.get(`${allCitiesBaseUrl}?limit=${totalNumberOfCities}`);

			const sortedCities: Cities = response.data.response.sort((a: City, b: City) =>
				a.name.localeCompare(b.name)
			);

			setAllCities(sortedCities);

			const cityNamesSorted: string[] = response.data.response
				.reduce((acc: string[], item: City) => {
					acc.push(item.name);
					return acc;
				}, [])
				.sort();
			setAllCityNames(cityNamesSorted);
		};
		fetchCities();
	}, []);

	return <AllCitiesContext.Provider value={{ allCities, allCityNames }}>{props.children}</AllCitiesContext.Provider>;
};

export default AllCitiesContextProvider;
