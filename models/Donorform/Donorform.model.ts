
import {IdentificationCard} from '../IdentificationCard/identificationCard.model';

import {Group} from '../Group/group.model';

import {DonorSubscriptionScheme} from '../DonorSubscriptionScheme/donorSubscriptionScheme.model';

import {serializable, alias, object, list, primitive} from 'serializr';

export class Donorform { 

	@serializable(alias('address_line1', primitive()))
	addressLine1?: string;

	@serializable(alias('address_line2', primitive()))
	addressLine2?: object;

	@serializable(alias('age', primitive()))
	age?: number;

	@serializable(alias('donor_subscription_scheme', object(DonorSubscriptionScheme)))
	donorSubscriptionScheme?: DonorSubscriptionScheme;

	@serializable(alias('email', primitive()))
	email?: string;

	@serializable(alias('group', object(Group)))
	group?: Group;

	@serializable(alias('group_head', primitive()))
	groupHead?: object;

	@serializable(alias('group_subscription_scheme', primitive()))
	groupSubscriptionScheme?: object;

	@serializable(alias('guardian_name', primitive()))
	guardianName?: string;

	@serializable(alias('head', primitive()))
	head?: boolean;

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('identification_card', object(IdentificationCard)))
	identificationCard?: IdentificationCard;

	@serializable(alias('identification_card_value', primitive()))
	identificationCardValue?: string;

	@serializable(alias('isd_code', primitive()))
	isdCode?: string;

	@serializable(alias('lat', primitive()))
	lat?: object;

	@serializable(alias('long', primitive()))
	long?: object;

	@serializable(alias('member_group_details', primitive()))
	memberGroupDetails?: object;

	@serializable(alias('mobile_number', primitive()))
	mobileNumber?: string;

	@serializable(alias('paid_status', primitive()))
	paidStatus?: boolean;

	@serializable(alias('paid_status_for_donor', primitive()))
	paidStatusForDonor?: boolean;

	@serializable(alias('pan', primitive()))
	pan?: string;

	@serializable(alias('payment_details', primitive()))
	paymentDetails?: object;

	@serializable(alias('pincode', primitive()))
	pincode?: string;

	@serializable(alias('profile_completion_status', primitive()))
	profileCompletionStatus?: object;

	@serializable(alias(':profile_pic_url', primitive()))
	profilePicUrl?: object;

	@serializable(alias('reg_number', primitive()))
	regNumber?: string;

	@serializable(alias('role_id', primitive()))
	roleId?: number;

	@serializable(alias('role_nam', primitive()))
	roleNam?: string;

	@serializable(alias('status', primitive()))
	status?: Number;

	@serializable(alias('total_contributions', primitive()))
	totalContributions?: object;

	@serializable(alias('total_contributions_current_yr', primitive()))
	totalContributionsCurrentYr?: number;

	@serializable(alias('username', primitive()))
	donorName?: string;

	@serializable(alias('country_id', primitive()))
	countryId?: string;

	@serializable(alias('country_name', primitive()))
	countryName?: string;

	@serializable(alias('gender_id', primitive()))
	genderId?: string;
	@serializable(alias('identification_card_id', primitive()))
	identificationCardId?: string;
	@serializable(alias('representative_id', primitive()))
	representativeId?: string;




	


	


}