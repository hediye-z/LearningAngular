import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ViewModeEnum} from '../enums/view-mode.enum';
import {SortModeEnum} from '../enums/sort-mode.enum';

@Component({
  selector: 'app-products-toolbar',
  templateUrl: './products-toolbar.component.html',
  styleUrls: ['./products-toolbar.component.css']
})
export class ProductsToolbarComponent implements OnInit{
  @Output() changeViewMode = new EventEmitter<ViewModeEnum>();
  @Output() changeSortMode = new EventEmitter<SortModeEnum>();
  @Output() changeSortModePrice = new EventEmitter<SortModeEnum>();
  @Output() changeQuery=new EventEmitter<string>();

  // sortMode: string;
  sortModePrice: string;

  sortMode : SortModeEnum;
  sortModeEnum: typeof SortModeEnum=SortModeEnum;

  query:string;

  viewModeEnum:typeof ViewModeEnum=ViewModeEnum;
  mode:ViewModeEnum;

  reportViewModeChange(mode: ViewModeEnum) {
    this.mode = mode;
    this.changeViewMode.emit(mode);
  }

  reportSortModeChange(mode: SortModeEnum) {
    this.sortMode = mode;
    this.changeSortMode.emit(mode);
  }

  reportSortPriceChange(priceMode: SortModeEnum) {
    this.sortModePrice = priceMode;
    this.changeSortModePrice.emit(priceMode);
  }

  reportChangeQuery() {
    this.changeQuery.emit(this.query);
  }

  ngOnInit(): void {
    this.reportViewModeChange(this.viewModeEnum.thumbnail);
    this.reportSortModeChange(this.sortModeEnum.ascending);
    this.reportSortPriceChange(this.sortModeEnum.ascending);
  }
}
