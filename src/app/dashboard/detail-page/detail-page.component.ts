import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { IAnimal } from 'src/app/interfaces/animal';
import { ISpecie } from 'src/app/interfaces/specie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  public animal: IAnimal = new IAnimal;
  public showLiscense: boolean = false;
  public animalForm: FormGroup = null;
  public species: ISpecie[];

  private _isEditForm: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();

    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      this.animal.id = param;
      this._isEditForm = true;
    }

    this.dashboardService.getAnimalById(this.animal.id).subscribe(animal => {
      this.animal = animal;
      console.log(this.animal)
      if (this.animal.needLiscense !== undefined) {
        this.showLiscense = true;
      }
      if (this._isEditForm) {
        this.updateAnimal();
      }
      this.getSpecies();
    });

  }

  createForm() {
    this.animalForm = this.fb.group({
      name: ['', Validators.required],
      specie: ['', Validators.required],
      subspecie: [''],
      dateBirth: [''],
      gender: [''],
      breed: [''],
      isSterilized: ['']
    });
  }

  updateAnimal() {
    this.animalForm.patchValue({
      name: this.animal.name !== null ? this.animal.name : '',
      specie: this.animal.specie.text,
      subspecie: this.animal.subspecie !== null ? this.animal.subspecie : '',
      dateBirth: this.animal.dateBirth !== null ? this.animal.dateBirth : '',
      gender: this.animal.gender !== null ? this.animal.gender : '',
      breed: this.animal.breed !== null ? this.animal.breed : '',
      isSterilized: this.animal.isSterilized,
    });
  }

  getSpecies() {
    this.species = [
      {id: 2, text: 'Perro'},
      {id: 1, text: 'Gato'}
    ];
  }

  back() {
    this.location.back();
  }

}
