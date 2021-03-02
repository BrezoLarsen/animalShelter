import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { IAnimal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {

  public animal: IAnimal;
  animals: IAnimal[] = [];
  animalsLoaded: boolean = false;
  errorMessage: string;

  constructor(
    private animalService: DashboardService
  ) { }


  ngOnInit(): void {
    this.animalService.getAnimals().subscribe({
        next: animals => {
            this.animals = animals;
            this.animalsLoaded = true;
        },
        error: err => this.errorMessage = err
    });
}

}
