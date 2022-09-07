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
import { GenderLabels } from '../../../interfaces/genders';
import { IAnimalImage } from 'src/app/interfaces/animalImage';

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
  public genderLabels = GenderLabels;
  public showLoading: boolean;
  public imagesArray: IAnimalImage[] = [];
  public imagesUrl = SETTINGS.ANIMALS_IMAGE_PATH;

  private _filters: IFilter = {
    showInAdoptionPage: true,
  };
  private _ngUnsuscribe: Subject<void> = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const param = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (param) {
      this.animal.id = param;
      this._filters.animalId = param;
    }
    this.getAnimal();
    this.getAnimalImages();
  }

  ngOnDestroy() {
    this._ngUnsuscribe.next();
    this._ngUnsuscribe.complete();
  }

  getAnimalImage(): string {
    return this.imagesUrl + this.animal.principalImageFileName;
  }

  back() {
    this.location.back();
  }

  hiddenAnimalMoreData(): boolean {
    return (
      (this.animal.behaviour &&
        this.animal.story &&
        this.animal.status &&
        this.animal.compatibleWith &&
        this.animal.health &&
        this.showLiscense &&
        this.animal.city &&
        this.animal.extraInformation &&
        this.animal.specie) !== null
    );
  }

  private getAnimalImages(): void {
    this.animalService
      .getAnimalImagesByAnimalId(this.animal.id)
      .pipe(takeUntil(this._ngUnsuscribe))
      .pipe(
        finalize(() => {
          this.showLoading = false;
        })
      )
      .subscribe((data) => {
        this.imagesArray = data;
      });
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
