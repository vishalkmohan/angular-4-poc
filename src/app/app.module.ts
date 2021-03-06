import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductComponent }  from './product/product.component';
import { MemberComponent }  from './members/members.component';
import { ProducerComponent }  from './producer/producer.component';
import { ConverterComponent }  from './converter/converter.component';
import { SortPipe } from './app.sort';

@NgModule({
  imports:      [ BrowserModule, 
    ReactiveFormsModule, 
    FormsModule,
  	RouterModule.forRoot([{
  	path:'member',
  	component:MemberComponent
  },{
	path:'product',
  	component:ProductComponent
  },{
  path:'producer',
    component:ProducerComponent
  },{
  path:'converter',
    component:ConverterComponent
  }])],
  declarations: [ SortPipe, AppComponent,ProductComponent,MemberComponent,ProducerComponent,ConverterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
