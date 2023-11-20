import { ReactNode, createContext, useState } from 'react';

interface AllCitiesContextTypes {}

interface AllCitiesContextProviderProps {
	children: ReactNode;
}

const AllCitiesContext = createContext<AllCitiesContextTypes>({});

const AllCitiesContextProvider = (props: AllCitiesContextProviderProps) => {
	const [allCities, setAllCities] = useState<string[]>([]);

	return <AllCitiesContext.Provider value={{}}>{props.children}</AllCitiesContext.Provider>;
};

export default AllCitiesContextProvider;
