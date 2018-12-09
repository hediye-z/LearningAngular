import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from '../models/product.model';
import * as _ from 'lodash';

@Pipe({
  name:'sortProductsByName',
  pure:false
})
export class SortProductsByNamePipe implements PipeTransform{
  transform(products: ProductModel[], direction:string): ProductModel[] {
    return _.orderBy(products,['name'],[direction=='asc'?'asc':'desc']);

  }


}
