
import {serializable, alias, object, list, primitive} from 'serializr';

export class Identification { 

	@serializable(alias('id', primitive()))
	value?: number;

	@serializable(alias('name', primitive()))
	label?: string;

}