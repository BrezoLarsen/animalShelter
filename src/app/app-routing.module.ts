import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCatsComponent } from './cats/all-cats.component';
import { NewCatFormComponent } from './cats/new-cat-form.component';

const routes: Routes = [
  { path: 'main', component: AllCatsComponent },
  { path: 'newCatForm', component: NewCatFormComponent },
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
