import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IAnimal } from '../../../interfaces/animal';
import { AnimalService } from '../../services/animal.service';
import { IPhoto } from '../../../interfaces/animalPhotos';
import { Species } from '../../../../const/species';
import { IFilter } from '../../../../const/filters.model';
import { SETTINGS } from 'src/app/config/settings';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public animal: IAnimal = new IAnimal();
  public showLiscense: boolean = false;
  public species = Species;
  public photosArray: IPhoto[];
  private _filters: IFilter = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      this.animal.id = param;
      this._filters.animalId = Number(param);
    }

    this.animalService.getAnimalsByFilters(this._filters).subscribe((data) => {
      console.log(data);
      this.animal = data[0];
      // this.photosArray = this.animal.photosArray;
      if (this.animal.needLiscense !== undefined) {
        this.showLiscense = true;
      }
    });
  }

  getAnimalImage(): string {
    return SETTINGS.ANIMALS_IMAGE_PATH + this.animal.imageUrl;
  }

  back() {
    this.location.back();
  }
}
