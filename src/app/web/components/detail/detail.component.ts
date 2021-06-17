import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAnimal } from 'src/app/interfaces/animal';
import { AnimalService } from '../../../dashboard/animal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public animal: IAnimal = new IAnimal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    if (param) {
      this.animal.id = param;
      console.log(this.animal.id)
    }

    this.animalService.getAnimalById(this.animal.id).subscribe(animal => {
      this.animal = animal;
      console.log(animal)
    });
  }

}
