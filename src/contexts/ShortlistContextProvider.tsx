import { ReactNode, createContext, useEffect, useState } from 'react';

interface ShortlistContextProviderProps {
	children: ReactNode;
}

interface ShortlistedHomesContextTypes {
	shortlistedHomesIds: string[];
	handleShortlistedHomes: (id: string) => void;
}

export const ShortlistedHomesContext = createContext<ShortlistedHomesContextTypes>({
	shortlistedHomesIds: [],
	handleShortlistedHomes: () => {},
});

const ShortlistContextProvider = (props: ShortlistContextProviderProps) => {
	const [shortlistedHomesIds, setShortlistedHomesIds] = useState<string[]>([]);

	useEffect(() => {
		const storedShortlistedHomesIds = localStorage.getItem('shortlisted_homes_ids');
		if (!storedShortlistedHomesIds) {
			localStorage.setItem('shortlisted_homes_ids', '[]');
		} else {
			setShortlistedHomesIds(JSON.parse(storedShortlistedHomesIds));
		}
	}, []);

	const handleShortlistedHomes = (id: string): void => {
		if (shortlistedHomesIds.includes(id)) {
			const updatedShortlistedHomes = shortlistedHomesIds.filter((homeId) => homeId !== id);
			setShortlistedHomesIds(updatedShortlistedHomes);
			localStorage.setItem('shortlisted_homes_ids', JSON.stringify(updatedShortlistedHomes));
		} else {
			const updatedShortlistedHomes = [...shortlistedHomesIds, id];
			setShortlistedHomesIds(updatedShortlistedHomes);
			localStorage.setItem('shortlisted_homes_ids', JSON.stringify(updatedShortlistedHomes));
		}
	};
	return (
		<ShortlistedHomesContext.Provider value={{ shortlistedHomesIds, handleShortlistedHomes }}>
			{props.children}
		</ShortlistedHomesContext.Provider>
	);
};

export default ShortlistContextProvider;
