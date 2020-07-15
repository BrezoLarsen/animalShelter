import { Component, OnInit } from '@angular/core';
import { ICat } from '../interfaces/cat';

@Component({
  selector: 'app-new-cat-form',
  templateUrl: './new-cat-form.component.html',
  styleUrls: ['./new-cat-form.component.scss']
})
export class NewCatFormComponent implements OnInit {

  public id: number;
  public name: string;
  public genders = ['Macho', 'Hembra'];
  public chip?: string;
  public entryDate?: string;
  public characteristic?: string;
  public captureZone: string;
  public imageUrl?: string;
  public imageUrlText: string = "Seleccionar archivo";

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    if(event.target.files.length > 0) 
     {
       this.imageUrlText = event.target.files[0].name;
       console.log('1', event.target.files.length);
     } else {
      this.imageUrlText = "Seleccionar archivo"; 
     }
  }

  deleteFile(event) {
    event.target.files = [];
    console.log('2', event.target.files.length);
    this.imageUrlText = "Seleccionar archivo"; 
  }

}
