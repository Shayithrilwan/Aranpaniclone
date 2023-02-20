import axiosInstance from "../interceptor/axiosInstance";
import { deserialize,serialize } from "serializr";

import Notification from "../shared/components/Notification";
import { NotificationTypes } from "../enums/notificationTypes";
import { useState } from "react";

import { User } from "./formData";

import { ApiRoutes } from "../routes/routeConstants/apiRoutes";


const UserService = () => {
	
      
	const [error, setError] = useState<Error>();

	const [loading, setLoading] = useState(false);

	

	const createUser = (data: User) => {
		const out =serialize(User,data)
		setLoading(true);
		
		return axiosInstance
		       
			.post(ApiRoutes.PROJECT_FORM_DATA,out)
			.then((response) => {
				const user = deserialize(User, response.data["user"]);
				Notification({
					message: "SUBMIT",
					description: "submitted in successfully",
					type: NotificationTypes.SUCCESS,
				});
				
			})
			.catch((error) => {
				Notification({
					message: "submit failed",
					description: "incorrect data ",
					type: NotificationTypes.ERROR,
				});
			
				setError(error);
				console.log(error)
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return {
		error,
		loading,
		createUser,
	};
};

export default UserService;
