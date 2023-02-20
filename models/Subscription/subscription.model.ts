
import {serializable, alias, object, list, primitive} from 'serializr';

export class Subscription { 

	@serializable(alias('id', primitive()))
	value?: number;

	@serializable(alias('name', primitive()))
	label?: string;

	@serializable(alias('amount', primitive()))
	amount?: number;

	@serializable(alias('status', primitive()))
	status?: boolean;

	@serializable(alias('period', primitive()))
	period?: string;

	@serializable(alias('total_subscibers', primitive()))
	totalSubscibers?: number;

}