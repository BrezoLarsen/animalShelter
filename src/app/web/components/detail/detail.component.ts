import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IAnimal } from '../../../interfaces/animal';
import { AnimalService } from '../../services/animal.service';
import { IPhoto } from '../../../interfaces/animalPhotos';
import { Species, SpeciesLabels } from '../../../../const/species';
import { IFilter } from '../../../../const/filters.model';
import { SETTINGS } from 'src/app/config/settings';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

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
  public speciesLabels = SpeciesLabels;
  public showLoading: boolean;

  private _filters: IFilter = {};
  private _ngUnsuscribe: Subject<void> = new Subject<void>();

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

    this.getAnimal();
  }

  ngOnDestroy() {
    this._ngUnsuscribe.next();
    this._ngUnsuscribe.complete();
  }

  getAnimalImage(): string {
    return SETTINGS.ANIMALS_IMAGE_PATH + this.animal.imageUrl;
  }

  back() {
    this.location.back();
  }

  private getAnimal(): void {
    this.showLoading = true;
    this.animalService
      .getAnimalsByFilters(this._filters)
      .pipe(takeUntil(this._ngUnsuscribe))
      .pipe(
        finalize(() => {
          this.showLoading = false;
        })
      )
      .subscribe((data) => {
        this.animal = data[0];
        // this.photosArray = this.animal.photosArray;
        if (this.animal.specie.toLowerCase() === SpeciesLabels[Species.DOG]) {
          this.showLiscense = true;
        }
      });
  }
}
