import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent  { 
	title:string = 'My Converter'; 

	myForm;
	ngOnInit(){
		this.myForm=new FormGroup({
				decimal:new FormControl("123"),
				binary:new FormControl(),
				octal:new FormControl(),
				hexa:new FormControl()
			});
	}

}


