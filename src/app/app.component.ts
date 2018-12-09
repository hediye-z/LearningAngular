import { Component } from '@angular/core';
import {FavoriteChangedEventArg} from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world! :)';
  post = {
    title : 'lalal',
    isFavorite : false,
  };
alaki:string='az birun parametri ';
  ViewMode = 'map';
  courses = [
    {id: 1 , name: 'course 1' , title : 'b to che '},
    {id: 2 , name: 'course 2' , title : 'b mn che '},
    {id: 3 , name: 'course 3' , title : 'b ma che '}
  ];
  OnFavariteClick(eventArgs: FavoriteChangedEventArg) {
    console.log('fav click ' + eventArgs.newValue);
  }
  onButtonClick() {
    console.log('btn click');
  }
}


