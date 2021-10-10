import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { IAnimal } from '../../interfaces/animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeAnimals: IAnimal[] = [];
  newAnimals;

  constructor(
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe(data => {
      this.homeAnimals = data;
      this.homeAnimals = this.shuffle(data).splice(0, 3);
    })
  }

  shuffle(array): IAnimal[] {
    return array.sort(() => Math.random() - 0.5)
  }

}
