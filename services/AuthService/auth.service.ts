import axiosInstance from "../../interceptor/axiosInstance";
import { deserialize } from "serializr";
import { User } from "../../models/user.model";
import Notification from "../../shared/components/Notification";
import { NotificationTypes } from "../../enums/notificationTypes";
import { useState } from "react";
import { ApiRoutes } from "../../routes/routeConstants/apiRoutes";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../routes/routeConstants/appRoutes";

const UserService = () => {
	const navigate = useNavigate();

	const [error, setError] = useState<Error>();

	const [loading, setLoading] = useState(false);

	const { setAuthenticated } = AuthContext();

	const loginUser = (data: User) => {
		setLoading(true);
		return axiosInstance
			.post(ApiRoutes.USER_LOGIN, data)
			.then((response) => {
				debugger
				console.log(response.headers);
				debugger
				localStorage.setItem("aranpani_access_token",JSON.stringify(response.headers))
				const user = deserialize(User, response.data["user"] );
				Notification({
					message: "Login",
					description: "Logged in successfully",

					type: NotificationTypes.SUCCESS,
				});
				setAuthenticated(user);
				navigate(AppRoutes.DASHBOARD);
			})
			.catch((error) => {
				Notification({
					message: "Login failed",
					description: "incorrect email or password",
					type: NotificationTypes.ERROR,
				});
			
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return {
		error,
		loading,
		loginUser,
	};
};

export default UserService;
