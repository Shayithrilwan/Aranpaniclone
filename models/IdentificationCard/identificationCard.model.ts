
import {serializable, alias, object, list, primitive} from 'serializr';

export class IdentificationCard { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('name', primitive()))
	name?: string;

}