import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from '../models/product.model';
import * as _ from 'lodash';
import {SortModeEnum} from '../enums/sort-mode.enum';

@Pipe({
  name:'sortProductsByPrice',
  pure:false
})
export class SortProductsByPricePipe implements PipeTransform{
  transform(products: ProductModel[],direction:SortModeEnum): ProductModel[] {
    let sortedProduct = _.orderBy(products,['price'],[direction==SortModeEnum.ascending?'asc':'desc']);
    return sortedProduct;
  }

}
