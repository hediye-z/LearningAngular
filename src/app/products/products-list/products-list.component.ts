import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {BaseProductService} from '../Services/base-product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent extends BaseProductService{
}
