import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef;
  @ViewChild('amountInput') amountInputRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const newIngredientName = this.nameInputRef.nativeElement.value;
    const newIngredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
