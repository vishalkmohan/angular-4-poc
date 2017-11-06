import { Component } from '@angular/core';

import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MemberComponent  { 
	title:string = 'My Members'; 
	 checkbox1:boolean = true;
	 isTrue:boolean = true;

	 addUser = function(userData){
	 	alert("User Deatails : "+userData.name +":"+userData.address+":"+userData.country);
	 }

	 //model driven
	 myForm;
	 ngOnInit(){
		 this.myForm=new FormGroup({
		 	memberid: new FormControl(),
		 	memberbank: new FormControl(),
		 	accounttype: new FormControl()
		 });
	 }
	 addMembership = function(membershipData){
	 	alert("User Deatails : "+membershipData.memberid +":"+membershipData.memberbank+":"+membershipData.accounttype);
	 }

}


