import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AllCatsComponent } from './all-cats.component';
import { SickCatsComponent } from './sick-cats.component';
import { WeakCatsComponent } from './weak-cats.component';
import { NewCatFormComponent } from './new-cat-form.component';
import { TabsComponent } from '../tabs/tabs.component';
import { CardComponent } from '../card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TabsComponent,
    AllCatsComponent,
    SickCatsComponent,
    WeakCatsComponent,
    CardComponent,
    NewCatFormComponent
  ],
  exports: [TabsComponent, CardComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forChild([
      { path: 'main', component: AllCatsComponent },
      { path: 'sick', component: SickCatsComponent },
      { path: 'weak', component: WeakCatsComponent }
    ])
  ]
})
export class CatsModule { }
