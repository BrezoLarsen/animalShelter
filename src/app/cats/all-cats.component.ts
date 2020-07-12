import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { ICat } from '../interfaces/cat';

@Component({
    selector: 'as-all',
    templateUrl: './all-cats.component.html'
})
export class AllCatsComponent implements OnInit {

    cats: ICat[] = [];

    constructor(
        private catService: CatService
    ) {}

    ngOnInit() {
        this.catService.getCats().subscribe({
            next: cats => {
                this.cats = cats;
            }
        });
    }

}