import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { IAnimal } from 'src/app/interfaces/animal';
import { AnimalService } from 'src/app/web/services/animal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  public animal: IAnimal = new IAnimal;
  public showLiscense: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      this.animal.id = param;
    }

    this.animalService.getAnimalById(this.animal.id).subscribe(animal => {
      this.animal = animal;
      if (this.animal.needLiscense !== undefined) {
        this.showLiscense = true;
      }
    });
  }

  back() {
    this.location.back();
  }

}
