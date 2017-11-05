import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent  { 
	title:string = 'My Producer'; 
	items:string[]=["Books","Pen","Pensil"];

	newItem="";
	pushItem = function{
		if(this.newItem!=""){
		items.push(this.newitem);
			this.newItem="";
		}

	}
}


