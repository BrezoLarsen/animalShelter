import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { NewAnimalFormComponent } from './new-animal-form.component';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    MainPageComponent,
    CardComponent,
    NewAnimalFormComponent
  ],
  exports: [ CardComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'main', component: MainPageComponent }
    ])
  ]
})
export class DashboardModule { }
