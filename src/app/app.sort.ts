import { Pipe } from '@angular/core';
@Pipe({
	name:"myPipe"
})
export class SortPipe{
	transform(value: string, param: string): string {

	var out="";
	for(var i =0;i<value.length;i++){
		out=out+value[i]+param;
	}
	out =out.slice(0, out.length-1);
	return out;
	}

}