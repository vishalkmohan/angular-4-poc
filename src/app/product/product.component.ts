import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  { 
	title:string = 'My Product'; 
	productList=[{id:"10001",name:"Mobile",price:"10,000"},
	{id:"10001",name:"Mobile",price:"10,000"},
	{id:"10002",name:"Laptop",price:"15,000"},
	{id:"10003",name:"TV",price:"12,000"},
	{id:"10004",name:"Desktop",price:"13,000"}];
}


