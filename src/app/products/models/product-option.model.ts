import {ProductModel} from './product.model';
import {SortModeEnum} from '../enums/sort-mode.enum';
import {ViewModeEnum} from '../enums/view-mode.enum';

export class ProductOptionModel {
  product:ProductModel[]=[];
  query:string='';
  sortOrder:SortModeEnum=SortModeEnum.ascending;
  viewMode:ViewModeEnum;
  sortOrderPrice:SortModeEnum=SortModeEnum.ascending;


}
