import { Component, OnInit } from '@angular/core';
import { Gallery } from 'angular-gallery';
import { AnimalService } from 'src/app/dashboard/animal.service';
import { IAnimal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animals: IAnimal[] = []

  constructor(
    private gallery: Gallery,
    private animalService: AnimalService
    ) { }

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe(data => {
      this.animals = data;
    })
    console.log(this.animals);
  }

  showGallery(index: number) {
    let prop = {
        images: [
            {path: this.animals[index].imageUrl},
            {path: this.animals[index].imageUrl},
            {path: this.animals[index].imageUrl},
            {path: this.animals[index].imageUrl},
            {path: this.animals[index].imageUrl}
        ],
        index
    };
    this.gallery.load(prop);
}

}
