import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { AnimalService } from '../../services/animal.service';
import { IAnimal } from '../../../interfaces/animal';

@Component({
  selector: 'app-detail-specie',
  templateUrl: './detail-specie.component.html',
  styleUrls: ['./detail-specie.component.scss']
})
export class DetailSpecieComponent {

  animals: IAnimal[] = [];
  animalsToShow: IAnimal[] = [];
  specie: string;
  param: string;


  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.paramMap.get('specie');
    this.specie = this.param;
    this.getAnimalsToShow();
  }

  getAnimalsToShow() {
    this.animalService.getAnimalsBySpecie(this.param).subscribe(data => {
      this.animals = data;
      this.animals.forEach((animal) => {
        if (animal.adoptionDate || animal.passAwayDate) { return; }
        if (animal.showInAdoptionPage === false) { return; }
        this.animalsToShow.push(animal);
      });
    });
  }

  back() {
    this.location.back();
  }
}
