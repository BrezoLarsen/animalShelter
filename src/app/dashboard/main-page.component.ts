import { Component, OnInit } from '@angular/core';
import { AnimalService } from './animal.service';
import { IAnimal } from '../interfaces/animal';

@Component({
    selector: 'as-all',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

    animals: IAnimal[] = [];
    filteredAnimals: IAnimal[] = [];
    animalsLoaded: boolean = false;
    errorMessage: string;
    _listFilter: string;

    constructor(
        private animalService: AnimalService
    ) {}

    ngOnInit(): void {
        this.animalService.getAnimals().subscribe({
            next: animals => {
                this.animals = animals;
                this.filteredAnimals = this.animals;
                this.animalsLoaded = true;
                console.log('TODOS: ', this.animals);
            },
            error: err => this.errorMessage = err
        });
    }

    get listFilter():string {
        return this._listFilter;
    }

    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredAnimals = this.listFilter ? this.perfomFilter(this.listFilter) : this.animals;
    }

    perfomFilter(filterBy: string): IAnimal[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.animals.filter((animal: IAnimal) =>
          animal.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

}
