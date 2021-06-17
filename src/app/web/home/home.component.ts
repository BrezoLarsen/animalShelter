import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';
import { AnimalService } from 'src/app/dashboard/animal.service';
import { IAnimal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animals: IAnimal[] = []

  constructor(
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe(data => {
      this.animals = data;
    })
  }

}
