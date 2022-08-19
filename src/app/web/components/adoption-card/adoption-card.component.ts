import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SETTINGS } from 'src/app/config/settings';
import { GenderLabels } from 'src/app/interfaces/genders';
import { IAnimal } from '../../../interfaces/animal';

@Component({
  selector: 'app-adoption-card',
  templateUrl: './adoption-card.component.html',
  styleUrls: ['./adoption-card.component.scss'],
})
export class AdoptionCardComponent implements OnInit {
  @Input() animal: IAnimal;
  public genderLabels = GenderLabels;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetail() {
    this.router.navigate([`detalle/${this.animal.id}`]);
  }

  getAnimalImage(): string {
    return SETTINGS.ANIMALS_IMAGE_PATH + this.animal.imageUrl;
  }
}
