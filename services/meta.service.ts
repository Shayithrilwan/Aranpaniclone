import axiosInstance from "../interceptor/axiosInstance";
import { deserialize, serialize } from "serializr";

import Notification from "../shared/components/Notification";
import { NotificationTypes } from "../enums/notificationTypes";
import { useState } from "react";


import { Project } from "../models/project/projectmodel";

import { ApiRoutes } from "../routes/routeConstants/apiRoutes";

import { countReset } from "console";
import { Gender } from "../models/Gender/gender.model";
import { Country } from "../models/Country/country.model";
import Subscriptions from "../Subcriptions/subcriptions";
import { Subscription } from "../models/Subscription/subscription.model";
import { Representative } from "../models/Representative/representative.model";
import { Identification } from "../models/Identification/identification.model";



const MetaService = () => {
	const [error, setError] = useState<Error>();
	const [loading, setLoading] = useState(false);
	const [genderdata, setgenderdata] = useState<Array<Gender>>([]);
	
	const [country, setcountry] = useState<Array<Country>>([]);
	const [subscriptions, setsubscription] = useState<Array<Subscription>>([]);
	const [representative, setrepresentatives] = useState<Array<Representative>>([]);
	const [identification, setidentification] = useState<Array<Identification>>([]);
	const gender = () => {
		setLoading(true);

		return axiosInstance
			.get(ApiRoutes.GENDER)
			.then((response) => {
				const genders = deserialize(Gender, response.data["genders"]) as Array<Gender>;
				
                setgenderdata( genders)

			})

	};

	
    const countries = () => {
		setLoading(true);

		return axiosInstance
			.get(ApiRoutes.COUNTRIES)
			.then((response) => {
				const countries = deserialize(Country, response.data["countries"]) as Array<Country>;
				
                setcountry( countries)

			})

	};

	
	const subscription = () => {
		setLoading(true);

		return axiosInstance
			.get(ApiRoutes.SUBCRIPTIONS)
			.then((response) => {
				const subcriptionsno = deserialize(Subscription, response.data["subscription_schemes"]) as Array<Subscription>;
				
                setsubscription( subcriptionsno)

			})

	};

	
	const representatives = () => {
		setLoading(true);

		return axiosInstance
			.get(ApiRoutes.REPRESENTATIVE)
			.then((response) => {
				const represntative = deserialize(Representative, response.data["area_representatives"]) as Array<Representative>;
				
                setrepresentatives( represntative)

			})

	};

	const identificationcards = () => {
		setLoading(true);

		return axiosInstance
			.get(ApiRoutes.IDENTIFICATION)
			.then((response) => {
				const identification = deserialize(Identification, response.data["identification_cards"]) as Array<Identification>;
				
                setidentification( identification)
				console.log(identification);
				

			})

	};


	return {
		error,
		loading,
		representatives,
		representative,
		gender,
		genderdata,
		countries,
		country,
		subscription,
		subscriptions,
		identificationcards,
		setrepresentatives,
		identification
		
	};
	




	
};
export default MetaService;





	
	
	
	




	





	



	










	




