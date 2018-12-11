import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from '../models/product.model';
import * as _ from 'lodash';
import {SortModeEnum} from '../enums/sort-mode.enum';

@Pipe({
  name: 'sortProductsByName',
  pure: false
})
export class SortProductsByNamePipe implements PipeTransform {
  transform(products: ProductModel[], direction: SortModeEnum): ProductModel[] {
    let sortedProduct = _.orderBy(products, ['name'], [direction == SortModeEnum.ascending ? 'asc' : 'desc']);
    return sortedProduct;
  }


}
