import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAnimal } from '../../../interfaces/animal';

@Component({
  selector: 'app-adoption-card',
  templateUrl: './adoption-card.component.html',
  styleUrls: ['./adoption-card.component.scss']
})
export class AdoptionCardComponent implements OnInit {

  @Input() animal: IAnimal;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToDetail() {
    this.router.navigate([`detalle/${this.animal.id}`])
  }

}
