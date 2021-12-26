import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { AnimalService } from '../../services/animal.service';
import { IAnimal } from '../../../interfaces/animal';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ISpecie } from 'src/app/interfaces/specie';

@Component({
  selector: 'app-detail-specie',
  templateUrl: './detail-specie.component.html',
  styleUrls: ['./detail-specie.component.scss']
})
export class DetailSpecieComponent {

  public animalsToShow: IAnimal[] = [];
  public specieText: string;
  public showLoading = false;
  private _animals: IAnimal[] = [];
  private _param: string;
  private _ngUnsuscribe: Subject<void> = new Subject<void>();


  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this._param = this.activatedRoute.snapshot.paramMap.get('specie');
    this.specieText = this._param;
    this.getAnimalsToShow();
  }

  ngOnDestroy() {
    this._ngUnsuscribe.next();
    this._ngUnsuscribe.complete();
  }

  getAnimalsToShow() {
    this.showLoading = true;
    this.animalService.getAnimalsBySpecie(this._param)
      .pipe(takeUntil(this._ngUnsuscribe))
      .pipe(finalize(() => this.showLoading = false))
      .subscribe(data => {
        this._animals = data;
        this._animals.forEach((animal) => {
          if (animal.adoptionDate || animal.passAwayDate) { return; }
          if (animal.showInAdoptionPage === false) { return; }
          this.animalsToShow.push(animal);
        });
      });
  }

  back() {
    this.location.back();
  }
}
