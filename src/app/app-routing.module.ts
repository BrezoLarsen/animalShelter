import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './web/about/about.component';
import { ForAdoptionComponent } from './web/for-adoption/for-adoption.component';
import { HelpUsComponent } from './web/help-us/help-us.component';
import { HomeComponent } from './web/home/home.component';
import { ShelterFormComponent } from './web/shelter-form/shelter-form.component';
import { ShelterComponent } from './web/shelter/shelter.component';
import { DetailComponent } from './web/components/detail/detail.component';
import { DetailSpecieComponent } from './web/components/detail-specie/detail-specie.component';
import { SponsorComponent } from './web/sponsor/sponsor.component';
import { VolunteerComponent } from './web/volunteer/volunteer.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'sobre-nosotras', component: AboutComponent },
  { path: 'en-adopcion', component: ForAdoptionComponent },
  { path: 'como-ayudar', component: HelpUsComponent },
  { path: 'casas-de-acogida', component: ShelterComponent },
  { path: 'casas-de-acogida/:specie', component: ShelterFormComponent, /*canActivate: [ProductDetailGuard]*/ },
  { path: 'detalle/:id', component: DetailComponent },
  { path: 'detalle-especie/:specie', component: DetailSpecieComponent },
  { path: 'apadrina', component: SponsorComponent },
  { path: 'voluntariado', component: VolunteerComponent },
  // Default URL:
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  // 404 URL:
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
