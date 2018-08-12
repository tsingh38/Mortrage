import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-processuser',
  templateUrl: './processuser.component.html',
  styleUrls: ['./processuser.component.css']
})
export class ProcessuserComponent implements OnInit {

  @Input()users:Array<{username:string,email:string}>=[];
  showUsers:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  doshowUsers(){
this.showUsers=true;
console.log('showUsers');
  }

}
