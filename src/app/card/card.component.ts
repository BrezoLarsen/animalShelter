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

  ngOnInit(): void { }

}
