import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularFirstHomework';
  personData = {
    name: "Dennis Schulist",
    isStudent: false,
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: 23505-1337,
    },
  };
  activateStudent():void {
    this.personData.isStudent=true;
  }
  
}

