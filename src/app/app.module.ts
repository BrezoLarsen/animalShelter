import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CatsModule } from 'src/cats/cats.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CatsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
