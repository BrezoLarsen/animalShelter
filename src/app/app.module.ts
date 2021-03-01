import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './web/home/home.component';
import { IvyGalleryModule } from 'angular-gallery';
import { MatIconModule } from '@angular/material/icon';
import { IconPiggy } from 'src/theme/custom-icons/piggy';
import { IconVolunteer } from 'src/theme/custom-icons/volunteer';
import { IconShelter } from 'src/theme/custom-icons/shelter';
import { IconSponsor } from 'src/theme/custom-icons/sponsor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IconPiggy,
    IconVolunteer,
    IconShelter,
    IconSponsor
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyGalleryModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
