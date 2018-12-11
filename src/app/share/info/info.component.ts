import {Component, OnInit} from '@angular/core';
import {PersonModel} from './models/person.model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  hediye: PersonModel;
  today: string;

  constructor() {
    this.hediye = new PersonModel();
    this.hediye.name='Hediye';
    this.hediye.family='Zarin';
    this.hediye.email='hediyezarin07@gmail.com';
    this.today=formatDate(new Date(), 'yyyy/MM/dd', 'en');
  }

}
