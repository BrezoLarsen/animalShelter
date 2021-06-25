import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAnimal } from 'src/app/interfaces/animal';
import { SPECIES } from 'src/const/species';

@Component({
  selector: 'app-for-adoption',
  templateUrl: './for-adoption.component.html',
  styleUrls: ['./for-adoption.component.scss']
})
export class ForAdoptionComponent {

  animal: IAnimal | undefined;
  species = SPECIES;

  constructor(private router: Router) { }

  goToSpeciesPage(specie: string) {
    this.router.navigate([`detalle-especie/${specie}`])
  }

}
