
import {serializable, alias, object, list, primitive} from 'serializr';

export class Gender { 

	@serializable(alias('id', primitive()))
	value?: number;

	@serializable(alias('category', primitive()))
	label?: string;

}