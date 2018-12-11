import {EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {ProductOptionModel} from '../models/product-option.model';

export class BaseProductService {
  @Input() query: string;
  @Input() sortOrder: string;
  @Input() sortByName: string;
  @Output() addToCartChild = new EventEmitter<ProductModel>();
  @Input() productOptionChild:ProductOptionModel;

  reportAddToCart(product: ProductModel) {
    this.addToCartChild.emit(product);
}
}
