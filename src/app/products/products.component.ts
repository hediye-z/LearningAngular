import {Component} from '@angular/core';
import {ProductModel} from './models/product.model';
import {ShoppingCartModel} from './models/shopping-cart.model';
import {ProductService} from './Services/product.service';
import {ShoppingCartService} from './Services/shopping-cart.service';
import {ViewModeEnum} from './enums/view-mode.enum';
import {SortModeEnum} from './enums/sort-mode.enum';
import {ProductOptionModel} from './models/product-option.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  viewMode: ViewModeEnum;
  viewModeEnum: typeof ViewModeEnum = ViewModeEnum;
  sortMode: SortModeEnum;

  ShoppingCart: ShoppingCartModel[] = [];
  sortModePrice = 'asc';
  query = '';
  products: ProductModel[];
  productOption: ProductOptionModel = new ProductOptionModel();

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) {
    this.productOption.product = this.productService.getAll();
    this.products = this.productService.getAll();
    this.ShoppingCart = this.shoppingCartService.getAll();
  }

  addToCart(product: ProductModel) {
    this.shoppingCartService.add(product);
  }

  RemoveItemFormCart(item: ShoppingCartModel) {
    this.shoppingCartService.remove(item);

  }

  updateSortMode(mode: SortModeEnum) {
    this.productOption.sortOrder = mode;
  }

  updateViewMode(mode: ViewModeEnum) {
    this.productOption.viewMode = mode;
  }

  updateSortPrice(mode: SortModeEnum) {
    this.productOption.sortOrderPrice = mode;
  }

  updateQuery(changedQuery: string) {
    this.query = changedQuery;
  }
}
