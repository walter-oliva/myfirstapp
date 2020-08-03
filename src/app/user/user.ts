import { CompileStylesheetMetadata, CompileNgModuleMetadata } from '@angular/compiler';

export class User {
    name: String;
    firstLastName: String;
    secondLastName: String;
    age: Number;
    address: Address;
    hobbies: String[];
    
    
    constructor (name: String, firstLastName: String, secondLastName: String, age: Number, address: Address) {
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.age = age;
        this.address = address;
    }
}
export class Address{
    city: String;
    street: String

    constructor(city: String, street: String) {
        this.city = city;
        this.street = street;
    };
}