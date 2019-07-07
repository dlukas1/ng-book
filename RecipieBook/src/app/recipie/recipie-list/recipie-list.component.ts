import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  @Output() recipieWasSelected = new EventEmitter<Recipie>();

  recipies: Recipie[] = [
    new Recipie('1st test recipie', 'Grill salmon', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*'),
    new Recipie('2nd test recipie', 'Salmon baked', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipieSelected(recipie: Recipie){
    this.recipieWasSelected.emit(recipie);
  }

}
