import {serializable, alias, primitive} from 'serializr';

export class User {
    @serializable(alias('incharge_mobile_number', primitive()))
    inchargeMobileNumber?: string;

    @serializable(alias('incharge_name', primitive()))
    inchargeName?: string;
    @serializable(alias('location', primitive()))
    Location?: string;
    @serializable(alias('location_name_tamil', primitive()))
    locationNameTamil?: string;
    @serializable(alias('name', primitive()))
    name?: string;
    @serializable(alias('temple_incharge_name_tamil', primitive()))
    templeInchargeNameTamil?: string;
    @serializable(alias('temple_name_tamil', primitive()))
    templeNameTamil?: string;
    



}

