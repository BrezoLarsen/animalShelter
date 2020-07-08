import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AllCatsComponent } from './all-cats.component';
import { SickCatsComponent } from './sick-cats.component';
import { WeakCatsComponent } from './weak-cats.component';
import { TabsComponent } from '../tabs/tabs.component';


@NgModule({
  declarations: [
    TabsComponent,
    AllCatsComponent,
    SickCatsComponent,
    WeakCatsComponent
  ],
  exports: [TabsComponent],
  imports: [
    RouterModule.forChild([
      { path: 'main', component: AllCatsComponent },
      { path: 'sick', component: SickCatsComponent },
      { path: 'weak', component: WeakCatsComponent }
    ])
  ]
})
export class CatsModule { }
