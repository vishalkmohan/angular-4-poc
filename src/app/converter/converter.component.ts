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
				decimal:new FormControl(),
				binary:new FormControl(),
				octal:new FormControl(),
				hexa:new FormControl()
			});
	}

	dFlag=true;
	bFlag=true;
	oFlag=true;
	hFlag=true;

	decimalChange=function(newValue){
		if(this.dFlag){
			this.bFlag=false;
			this.oFlag=false;
			this.hFlag=false;
			this.myForm.patchValue({binary : parseInt(newValue,10).toString(2)});
			this.myForm.patchValue({octal : parseInt(newValue,10).toString(8)});
			this.myForm.patchValue({hexa : parseInt(newValue,10).toString(16)});
			this.bFlag=true;
			this.oFlag=true;
			this.hFlag=true;
		}
	}

	binaryChange=function(newValue){
		if(this.bFlag){
			this.dFlag=false;
			this.oFlag=false;
			this.hFlag=false;
			this.myForm.patchValue({decimal : parseInt(newValue,2).toString(10)});
			this.myForm.patchValue({octal : parseInt(newValue,10).toString(8)});
			this.myForm.patchValue({hexa : parseInt(newValue,10).toString(16)});
			this.dFlag=true;
			this.oFlag=true;
			this.hFlag=true;
		}
	}
	octalChange=function(newValue){
		if(this.oFlag){
			this.dFlag=false;
			this.bFlag=false;
			this.hFlag=false;
			this.myForm.patchValue({decimal : parseInt(newValue,8).toString(10)});
			this.myForm.patchValue({binary : parseInt(newValue,10).toString(2)});
			this.myForm.patchValue({hexa : parseInt(newValue,10).toString(16)});
			this.dFlag=true;
			this.bFlag=true;
			this.hFlag=true;
		}
	}
	hexaChange=function(newValue){
		if(this.hFlag){
			this.dFlag=false;
			this.bFlag=false;
			this.oFlag=false;
			this.myForm.patchValue({decimal : parseInt(newValue,16).toString(10)});
			this.myForm.patchValue({binary : parseInt(newValue,10).toString(2)});
			this.myForm.patchValue({octal : parseInt(newValue,10).toString(8)});
			this.dFlag=true;
			this.bFlag=true;
			this.oFlag=true;
		}
	}
	

}


