import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: [`
    glyphicon {
      color: red;
      background-color: red;
    }
  p{ 
    color: aqua;
    background-color: red;
  }`],
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {

  @Input() isFavarite: boolean;
  @Output() change = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.isFavarite = !this.isFavarite;
    this.change.emit({newValue: this.isFavarite});
  }

}

export interface FavoriteChangedEventArg {
  newValue: boolean;
}
