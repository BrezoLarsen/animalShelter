import { Component, OnInit, Input } from '@angular/core';
import { IAnimal } from '../interfaces/animal';

@Component({
  selector: 'as-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  animals: IAnimal[] = [];

  @Input() animal: IAnimal;

  constructor() {}

  ngOnInit(): void {console.log(this.animal);}

}
