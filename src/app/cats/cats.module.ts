import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllCatsComponent } from './all-cats.component';
import { SickCatsComponent } from './sick-cats.component';
import { WeakCatsComponent } from './weak-cats.component';
import { TabsComponent } from '../tabs/tabs.component';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TabsComponent,
    AllCatsComponent,
    SickCatsComponent,
    WeakCatsComponent,
    CardComponent
  ],
  exports: [TabsComponent, CardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'main', component: AllCatsComponent },
      { path: 'sick', component: SickCatsComponent },
      { path: 'weak', component: WeakCatsComponent }
    ])
  ]
})
export class CatsModule { }
