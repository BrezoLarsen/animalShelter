import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './dashboard/main-page.component';
import { NewAnimalFormComponent } from './dashboard/new-animal-form.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'newAnimalForm', component: NewAnimalFormComponent },
  // Default URL:
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // 404 URL:
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
