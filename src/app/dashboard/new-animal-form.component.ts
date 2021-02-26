import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../interfaces/animal';

@Component({
  selector: 'app-new-animal-form',
  templateUrl: './new-animal-form.component.html',
  styleUrls: ['./new-animal-form.component.scss']
})
export class NewAnimalFormComponent implements OnInit {

  public id: number;
  public name: string;
  public genders = ['Macho', 'Hembra', 'No definido'];
  public chip?: string;
  public entryDate?: string;
  public characteristic?: string;
  public captureZone: string;
  public imageUrl?: string;
  public imageUrlText: string = "Seleccionar archivo";
  public isWeak: boolean = false;
  public isSick: boolean;
  public medicineName: string;
  public medicineDose: string;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    if(event.target.files.length > 0)
     {
       this.imageUrlText = event.target.files[0].name;
     } else {
      this.imageUrlText = "Seleccionar archivo";
     }
  }

  deleteFile(event) {
    event.target.files = [];
    this.imageUrlText = "Seleccionar archivo";
  }

}
