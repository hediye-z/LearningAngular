import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingCartModel} from '../models/shopping-cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() shoppingCartItems: ShoppingCartModel[];
  @Output() removeItem = new EventEmitter<ShoppingCartModel>();

  reportRemoveItem(item: ShoppingCartModel) {
    this.removeItem.emit(item);
  }
}
