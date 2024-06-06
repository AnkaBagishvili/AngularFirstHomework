export interface Person {
    name:string;
    isStudent:boolean;
    email:string;
    address:Address}

export interface Address{
street:string;
suite:string;
city:string;
zipcode:number;
}