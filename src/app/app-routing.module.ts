import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Default URL:
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // 404 URL: 
  { path: '**', redirectTo: 'main', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
