import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';
import { ISpecie } from '../../interfaces/specie';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-for-adoption',
  templateUrl: './for-adoption.component.html',
  styleUrls: ['./for-adoption.component.scss']
})
export class ForAdoptionComponent {

  public species: ISpecie[];
  public isLoadingData: boolean;

  private _ngUnsubscribe = new Subject<void>();

  constructor(
    private router: Router,
    private animalService: AnimalService
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  public goToSpeciesPage(specie: string): void {
    this.router.navigate([`detalle-especie/${specie}`])
  }

  private fetchData(): void {
    this.isLoadingData = true;
    this.animalService.getSpecies()
      .pipe(takeUntil(this._ngUnsubscribe))
      .pipe(finalize(() => this.isLoadingData = false))
      .subscribe(data => {
        this.species = data;
      });
  }

}
