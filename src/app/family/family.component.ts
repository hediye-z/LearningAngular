import {Component, OnInit} from '@angular/core';
import {FamilyListService} from './services/family-list.service';
import {FamilyModel} from './models/family.model';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent {
  constructor(private familyService: FamilyListService) {
  }
  family = this.familyService.getFamily();
}
