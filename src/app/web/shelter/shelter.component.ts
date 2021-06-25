import { Component } from '@angular/core';
import { SPECIES } from '../../../const/species';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent {

  species = [SPECIES.DOG, SPECIES.CAT, SPECIES.FERRET, SPECIES.BIRD, SPECIES.RODENT, SPECIES.TURTLE, SPECIES.RABBIT];

  constructor() { }

}
