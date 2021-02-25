import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllAnimalComponent } from './animal/all-animal.component';
import { NewAnimalFormComponent } from './animal/new-animal-form.component';

const routes: Routes = [
  { path: 'main', component: AllAnimalComponent },
  { path: 'newAnimalForm', component: NewAnimalFormComponent },
  // Default URL:
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // 404 URL:
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
