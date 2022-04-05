import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Species, SpeciesLabels } from '../../../const/species';

@Component({
  selector: 'app-for-adoption',
  templateUrl: './for-adoption.component.html',
  styleUrls: ['./for-adoption.component.scss'],
})
export class ForAdoptionComponent {
  public species = Species;
  public speciesLabels = SpeciesLabels;
  public isLoadingData: boolean;

  private _ngUnsubscribe = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  public goToSpeciesPage(specieName: string): void {
    this.router.navigate([`detalle-especie/${specieName}`]);
  }
}
