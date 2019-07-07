import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Recipie } from '../../recipie.model'

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input() recipie: Recipie;
  @Output() recipieSelected = new EventEmitter<void>();
  recipies: Recipie[] = [];
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipieSelected.emit();
  }

}
