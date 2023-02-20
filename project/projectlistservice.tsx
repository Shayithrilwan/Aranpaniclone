import axiosInstance from "../interceptor/axiosInstance";
import { deserialize, serialize } from "serializr";

import Notification from "../shared/components/Notification";
import { NotificationTypes } from "../enums/notificationTypes";
import { useState } from "react";

import { User } from "./formData";
import { Project } from "../models/project/projectmodel";

import { ApiRoutes } from "../routes/routeConstants/apiRoutes";
import Tab from "./projectTab";
import { countReset } from "console";


const ProjectService = () => {



	const [error, setError] = useState<Error>();

	const [loading, setLoading] = useState(false);
	const [listdata, setlistdata] = useState<Array<Project>>([]);
	const [countvalue, setcountvalue] = useState<number>();




	const listUser = (key: string) => {
		setLoading(true);

		return axiosInstance
			.get(ApiRoutes.PROJECT__LIST, {
				params: { status: key }


			})
			.then((response) => {
				const projects = deserialize(Project, response.data["projects"]) as Array<Project>;
				const count = projects.length
				console.log(count);
				setcountvalue(count)



				setlistdata(projects)


			})
			.catch((error) => {
				
				setError(error);
				console.log(error);
			})
			
			.catch((ex) => {
			})

	};

	return {
		error,
		loading,
		listUser,
		countvalue,
		listdata
	};
};

export default ProjectService;
