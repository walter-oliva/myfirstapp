import { Component } from '@angular/core';
import { User, Address } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';
  
  name: String;
  firstLastName: String;
  secondLastName: String;
  age: Number;
  city: String;
  street: String;
  listUser = new Array<User>();
  
  addUser() {
    this.listUser.push (new User(this.name,this.firstLastName,this.secondLastName,this.age, new Address(this.city, this.street)));
    return false;
  }
}
