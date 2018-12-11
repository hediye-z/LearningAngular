import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../models/product.model';
import {BaseProductService} from '../Services/base-product.service';

@Component({
  selector: 'app-products-thumbnails',
  templateUrl: './products-thumbnails.component.html',
  styleUrls: ['./products-thumbnails.component.css']
})
export class ProductsThumbnailsComponent extends BaseProductService{
}
