import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   usersDef:Array<{username:string,email:string}>;



addedUser( listOfUsers: Array<{username:string,email:string}>){
  this.usersDef=[];
  this.usersDef=listOfUsers;
  
}

}