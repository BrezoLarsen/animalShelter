import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from 'src/app/dashboard/animal.service';
import { IAnimal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-detail-specie',
  templateUrl: './detail-specie.component.html',
  styleUrls: ['./detail-specie.component.scss']
})
export class DetailSpecieComponent {

  animals: IAnimal[] = [];
  specie: string;


  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('specie');
    this.specie = param;

    this.animalService.getAnimalsBySpecie(param).subscribe(data => {
      this.animals = data;
    })

  }



}
