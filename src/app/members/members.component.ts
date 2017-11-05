import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MemberComponent  { 
	title:string = 'My Members'; 
	 checkbox1:boolean = true;
}


