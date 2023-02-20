
import {serializable, alias, object, list, primitive} from 'serializr';

export class Representative { 

	@serializable(alias('id', primitive()))
	value?: number;

	@serializable(alias('mobile_number', primitive()))
	mobileNumber?: string;

	@serializable(alias('isd_code', primitive()))
	isdCode?: string;

	@serializable(alias('username', primitive()))
	label?: string;

	@serializable(alias('role_id', primitive()))
	roleId?: number;

}