import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from '../models/product.model';
import * as _ from 'lodash';
@Pipe({
  name:'searchProduct',
})

export class SearchProductsPipe implements PipeTransform{
  transform(products: ProductModel[],filter: string): ProductModel[] {
    return _.filter(products,p => _.includes(p.name.toLowerCase(),filter.toLowerCase()))
  }
}
