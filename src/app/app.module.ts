import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductComponent }  from './product/product.component';
import { MemberComponent }  from './members/members.component';
import { ProducerComponent }  from './producer/producer.component';
import { SortPipe } from './app.sort';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  	RouterModule.forRoot([{
  	path:'member',
  	component:MemberComponent
  },{
	path:'product',
  	component:ProductComponent
  },{
  path:'producer',
    component:ProducerComponent
  }])],
  declarations: [ SortPipe, AppComponent,ProductComponent,MemberComponent,ProducerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
