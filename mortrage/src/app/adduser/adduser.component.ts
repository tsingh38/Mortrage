import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})




export class AdduserComponent implements OnInit {
  @Output('users') users = new EventEmitter<any[]>();
  listOfUsers: Array<{username:string,email:string}>=[];
 username:string="";
 email:string="";
  constructor() { }

  ngOnInit() {
  }

  addUser(){
  this.listOfUsers.push( {username:this.username,email:this.email});
  this.users.emit(this.listOfUsers);
  console.log("emit was called");
  }
}
