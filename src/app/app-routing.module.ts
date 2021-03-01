import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './dashboard/main-page.component';
import { NewAnimalFormComponent } from './dashboard/new-animal-form.component';
import { AboutComponent } from './web/about/about.component';
import { HomeComponent } from './web/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre-nosotros', component: AboutComponent },
  { path: 'dashboard', component: MainPageComponent },
  { path: 'newAnimalForm', component: NewAnimalFormComponent },
  // Default URL:
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // 404 URL:
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
