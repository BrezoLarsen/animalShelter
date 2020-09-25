import { Component, OnInit, Input } from '@angular/core';
import { ICat } from '../interfaces/cat';

@Component({
  selector: 'as-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cats: ICat[] = [];

  @Input() cat: ICat;

  constructor() {}

  ngOnInit(): void {console.log(this.cat);}

  setAsSick() {
    this.cat.isSick = true;
    console.log(this.cat);
  }

  setAsWeak() {
    this.cat.isWeak = true;
    console.log(this.cat);
  }

}
