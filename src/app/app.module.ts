import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IvyGalleryModule } from 'angular-gallery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from './material.module';
import { WebModule } from './web/web.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    IvyGalleryModule,
    WebModule,
    DashboardModule,
    MatFormFieldModule,
        MatInputModule
  ],
  exports: [
    MatInputModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
