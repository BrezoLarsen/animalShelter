import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { NewAnimalFormComponent } from './new-animal-form.component';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { DetailPageComponent } from './detail-page/detail-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    CardComponent,
    NewAnimalFormComponent,
    DetailPageComponent
  ],
  exports: [ CardComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'main', component: MainPageComponent }
    ])
  ]
})
export class DashboardModule { }
