
import {State} from '../State/state.model';

import {Country} from '../Country/country.model';

import {City} from '../City/city.model';

import {serializable, alias, object, list, primitive} from 'serializr';

export class Donor { 

	@serializable(alias('city', object(City)))
	city?: City;

	@serializable(alias('class_name', primitive()))
	className?: string;

	@serializable(alias('country', object(Country)))
	country?: Country;

	@serializable(alias('donor_type', primitive()))
	donorType?: string;

	@serializable(alias('head_reg_number', primitive()))
	 headRegNumber?: object;

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('isd_code', primitive()))
	isdCode?: object;

	@serializable(alias('mobile_number', primitive()))
	 mobileNumber?: string;

	@serializable(alias('paid_status', primitive()))
	paidStatus?: object;

	@serializable(alias('paid_status_for_donor', primitive()))
	paidStatusForDonor?: boolean;

	@serializable(alias('pincode', primitive()))
	pincode?: object;

	@serializable(alias('profile_pic_url', primitive()))
	profilePicUrl?: object;

	@serializable(alias('reg_number', primitive()))
	regNumber?: string;

	@serializable(alias('state', object(State)))
	state?: State;

	@serializable(alias('status', primitive()))
	status?: boolean;

	@serializable(alias('username', primitive()))
	username?: string;
	

}