import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AllAnimalComponent } from './all-animal.component';
import { SickAnimalComponent } from './sick-animal.component';
import { WeakAnimalComponent } from './weak-animal.component';
import { NewAnimalFormComponent } from './new-animal-form.component';
import { TabsComponent } from '../tabs/tabs.component';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    TabsComponent,
    AllAnimalComponent,
    SickAnimalComponent,
    WeakAnimalComponent,
    CardComponent,
    NewAnimalFormComponent
  ],
  exports: [TabsComponent, CardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'main', component: AllAnimalComponent },
      { path: 'sick', component: SickAnimalComponent },
      { path: 'weak', component: WeakAnimalComponent }
    ])
  ]
})
export class AnimalsModule { }
