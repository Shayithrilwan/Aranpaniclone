
import {serializable, alias, object, list, primitive} from 'serializr';

export class DonorSubscriptionScheme { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('subscription_scheme_id', primitive()))
	subscriptionSchemeId?: number;

	@serializable(alias('name', primitive()))
	name?: string;

	@serializable(alias('amount', primitive()))
	amount?: number;

	@serializable(alias('status', primitive()))
	status?: boolean;

}