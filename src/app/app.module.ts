import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './web/home/home.component';
import { AboutComponent } from './web/about/about.component';
import { IvyGalleryModule } from 'angular-gallery';

import { MatIconModule } from '@angular/material/icon';
import { IconPiggy } from 'src/theme/custom-icons/piggy';
import { IconVolunteer } from 'src/theme/custom-icons/volunteer';
import { IconShelter } from 'src/theme/custom-icons/shelter';
import { IconSponsor } from 'src/theme/custom-icons/sponsor';
import { IconFacebook } from 'src/theme/custom-icons/facebook';
import { IconInstagram } from 'src/theme/custom-icons/instagram';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    IconPiggy,
    IconVolunteer,
    IconShelter,
    IconSponsor,
    IconFacebook,
    IconInstagram
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
