import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent  { 
	title:string = 'My Producer'; 
	items:string[]=["Books","Pensil"];

	newItem:string="";
	pushItem = function{
		if(this.newItem!=""){
			this.items.push(this.newItem);

		}

	}
}


