
import {serializable, alias, object, list, primitive} from 'serializr';

export class Group { 

	@serializable(alias('id', primitive()))
	id?: number;

}