import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from '../models/product.model';
import * as _ from 'lodash';

@Pipe({
  name:'sortProductsByPrice',
  pure:false
})
export class SortProductsByPricePipe implements PipeTransform{
  transform(products: ProductModel[],direction:string): ProductModel[] {
    return _.orderBy(products,['price'],[direction=='asc'?'asc':'desc']);
  }

}
