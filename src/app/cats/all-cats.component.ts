import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { ICat } from '../interfaces/cat';

@Component({
    selector: 'as-all',
    templateUrl: './all-cats.component.html'
})
export class AllCatsComponent implements OnInit {

    cats: ICat[] = [];
    catsLoaded: boolean = false;
    errorMessage: string;

    constructor(
        private catService: CatService
    ) {}

    ngOnInit(): void {
        this.catService.getCats().subscribe({
            next: cats => {
                this.cats = cats;
                this.catsLoaded = true;
                console.log('TODOS: ', this.cats);
            },
            error: err => this.errorMessage = err
        });
    }

}