export interface Property {
	address: Address;
	availability: string;
	bathroom_count?: number | undefined;
	bedroom_count?: number | undefined;
	bedroom_prices?: BedroomPrices;
	deposit: number | undefined;
	furnished: string;
	images: string[];
	key_features: string[];
	property_description: string;
	property_type: string;
	_id: string;
}

type Address = {
	city: string;
	postcode: string;
	street: string;
};

type BedroomPrices = {
	bedroom_one?: number;
	bedroom_two?: number;
	bedroom_three?: number;
	bedroom_four?: number;
	bedroom_five?: number;
	bedroom_six?: number;
	bedroom_seven?: number;
	bedroom_eight?: number;
	bedroom_nine?: number;
	bedroom_ten?: number;
};
