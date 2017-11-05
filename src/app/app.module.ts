import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductComponent }  from './product/product.component';
import { MemberComponent }  from './members/members.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ProductComponent,MemberComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
