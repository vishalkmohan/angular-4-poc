import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductComponent }  from './product/product.component';
import { MemberComponent }  from './members/members.component';

@NgModule({
  imports:      [ BrowserModule,
  	RouterModule.forRoot([{
  	path:'member',
  	component:MemberComponent
  },{
	path:'product',
  	component:ProductComponent
  }])],
  declarations: [ AppComponent,ProductComponent,MemberComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
