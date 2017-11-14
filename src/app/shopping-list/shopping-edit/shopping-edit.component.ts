import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') inputName: ElementRef;
  @ViewChild('amountInput') inputAmount: ElementRef;

  @Output() addIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  AddIngredients() {
    const InName = this.inputName.nativeElement.value;
    const InAmount = this.inputAmount.nativeElement.value;
    const newIngredient = new Ingredient(InName, InAmount);
    this.addIngredient.emit(newIngredient);
  }
}
