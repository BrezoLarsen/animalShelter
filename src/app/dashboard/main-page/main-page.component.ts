import { Component, OnInit } from '@angular/core';
import { DashboardMenuItem } from 'src/app/interfaces/dashboard-menu-item';
import { IAnimal } from '../../interfaces/animal';
import { DashboardService } from '../services/dashboard.service';

@Component({
    selector: 'as-all',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    animals: IAnimal[] = [];
    filteredAnimals: IAnimal[] = [];
    menuItems: DashboardMenuItem[];
    animalsLoaded = false;
    isAdoptedSelected = false;
    errorMessage: string;
    _listFilter: string;

    constructor(
        private dashboardService: DashboardService
    ) {}

    ngOnInit(): void {
      this.getAllAnimals();
      this.getMenu();
    }

    getMenu() {
      this.menuItems = [
        {
          id: 1,
          title: "Todos",
          active: false
        },
        {
          id: 2,
          title: "Adoptados",
          active: false
        }
      ]
      // get all active tabs
      let activeTabs = this.menuItems.filter((tab)=>tab.active);
      // Activate first menu item
      if(activeTabs.length === 0) {
        this.selectItem(this.menuItems[0]);
      }
    }

    selectItem(item) {
      this.menuItems.forEach(item => item.active = false);
      item.active = true;
      if (item.id === 1) {
        this.getAllAnimals();
      } else if (item.id === 2) {
        this.getAdoptedAnimals()
      }
    }

    getAdoptedAnimals() {
      this.isAdoptedSelected = true;
      this.dashboardService.getAnimals().subscribe(data => {
        this.filteredAnimals = [];
        this.animals = data;
        this.animals.forEach(animal => {
          if (animal.adoptionDate) {
            this.filteredAnimals.push(animal);
          };
        })
      });
    }

    getAllAnimals() {
      this.dashboardService.getAnimals().subscribe(data => {
        this.animals = data;
        this.filteredAnimals = this.animals;
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
