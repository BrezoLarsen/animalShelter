import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { ICat } from '../interfaces/cat';

@Component({
    selector: 'as-all',
    templateUrl: './all-cats.component.html'
})
export class AllCatsComponent implements OnInit {

    cats: ICat[] = [];
    filteredCats: ICat[] = [];
    catsLoaded: boolean = false;
    errorMessage: string;
    _listFilter: string;

    constructor(
        private catService: CatService
    ) {}

    ngOnInit(): void {
        this.catService.getCats().subscribe({
            next: cats => {
                this.cats = cats;
                this.filteredCats = this.cats;
                this.catsLoaded = true;
                console.log('TODOS: ', this.cats);
            },
            error: err => this.errorMessage = err
        });
    }

    get listFilter():string {
        return this._listFilter;
    }

    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredCats = this.listFilter ? this.perfomFilter(this.listFilter) : this.cats;
    }

    perfomFilter(filterBy: string): ICat[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cats.filter((cat: ICat) =>
            cat.catName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

}