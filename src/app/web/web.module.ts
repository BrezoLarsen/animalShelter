import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

import { IconPiggy } from 'src/theme/custom-icons/piggy';
import { IconVolunteer } from 'src/theme/custom-icons/volunteer';
import { IconShelter } from 'src/theme/custom-icons/shelter';
import { IconSponsor } from 'src/theme/custom-icons/sponsor';
import { IconFacebook } from 'src/theme/custom-icons/facebook';
import { IconInstagram } from 'src/theme/custom-icons/instagram';
import { IconFootprint } from 'src/theme/custom-icons/footprint';
import { IconTiktok } from '../../theme/custom-icons/tiktok';
import { IconTwitter } from 'src/theme/custom-icons/twitter';

import { HelpUsComponent } from './help-us/help-us.component';
import { ForAdoptionComponent } from './for-adoption/for-adoption.component';
import { ShelterComponent } from './shelter/shelter.component';
import { ShelterFormComponent } from './shelter-form/shelter-form.component';
import { AdoptionCardComponent } from './components/adoption-card/adoption-card.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailSpecieComponent } from './components/detail-specie/detail-specie.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HelpBoxComponent } from './components/help-boxes/help-boxes.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    HelpUsComponent,
    ForAdoptionComponent,
    ShelterComponent,
    ShelterFormComponent,
    AdoptionCardComponent,
    DetailComponent,
    DetailSpecieComponent,
    SponsorComponent,
    VolunteerComponent,
    HelpBoxComponent,
    AboutComponent,
    IconPiggy,
    IconVolunteer,
    IconShelter,
    IconSponsor,
    IconFacebook,
    IconInstagram,
    IconTiktok,
    IconTwitter,
    IconFootprint
  ],
  exports: [
    IconPiggy,
    IconVolunteer,
    IconShelter,
    IconSponsor,
    IconFacebook,
    IconInstagram,
    IconTiktok,
    IconTwitter,
    IconFootprint
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})
export class WebModule { }
