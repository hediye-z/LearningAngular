import {ShoppingCartModel} from '../models/shopping-cart.model';
import {ProductModel} from '../models/product.model';
import * as _ from 'lodash';

export class ShoppingCartService {
  private shoppingCart: ShoppingCartModel[] = [];

  add(product: ProductModel) {
    let item = _.find(this.shoppingCart, {product: product});
    if (!item) {
      this.shoppingCart.push({
        count: 1,
        product: product,
      });
    }
    else {
      item.count++;
    }
  }

  remove(item: ShoppingCartModel) {
    _.remove(this.shoppingCart, {product: item.product});
  }

  getAll() {
    return this.shoppingCart;
  }
}
