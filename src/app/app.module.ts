import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyGalleryModule } from 'angular-gallery';

import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './web/home/home.component';
import { AboutComponent } from './web/about/about.component';

import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';

import { IconPiggy } from 'src/theme/custom-icons/piggy';
import { IconVolunteer } from 'src/theme/custom-icons/volunteer';
import { IconShelter } from 'src/theme/custom-icons/shelter';
import { IconSponsor } from 'src/theme/custom-icons/sponsor';
import { IconFacebook } from 'src/theme/custom-icons/facebook';
import { IconInstagram } from 'src/theme/custom-icons/instagram';
import { IconFootprint } from 'src/theme/custom-icons/footprint';

import { HelpUsComponent } from './web/help-us/help-us.component';
import { ForAdoptionComponent } from './web/for-adoption/for-adoption.component';
import { ShelterComponent } from './web/shelter/shelter.component';
import { ShelterFormComponent } from './web/shelter-form/shelter-form.component';
import { AdoptionCardComponent } from './web/components/adoption-card/adoption-card.component';
import { DetailComponent } from './web/components/detail/detail.component';
import { DetailSpecieComponent } from './web/components/detail-specie/detail-specie.component';
import { SponsorComponent } from './web/sponsor/sponsor.component';
import { VolunteerComponent } from './web/volunteer/volunteer.component';
import { HelpBoxComponent } from './web/components/help-boxes/help-boxes.component';
import { IconTiktok } from '../theme/custom-icons/tiktok';
import { IconTwitter } from 'src/theme/custom-icons/twitter';

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
    IconInstagram,
    IconTiktok,
    IconTwitter,
    IconFootprint,
    HelpUsComponent,
    ForAdoptionComponent,
    ShelterComponent,
    ShelterFormComponent,
    AdoptionCardComponent,
    DetailComponent,
    DetailSpecieComponent,
    SponsorComponent,
    VolunteerComponent,
    HelpBoxComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyGalleryModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
