import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
