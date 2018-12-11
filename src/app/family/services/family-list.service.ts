import {FamilyLogService} from './family-log.service';
import {FamilyModel} from '../models/family.model';
import {Injectable} from '@angular/core';

export abstract class FamilyListService {
  abstract getFamily();
}

@Injectable()
export class ZarinFamily extends FamilyListService {
  constructor(private familyLogService: FamilyLogService) {
    super();
    this.familyLogService.log();
  }

  getFamily():FamilyModel[] {
   let zfamily:FamilyModel[];
   zfamily=[
     {id: 1, name: 'farah'},
     {id: 2, name: 'ebrahim'},
     {id: 3, name: 'Parinaz'},
     {id: 4, name: 'Leyla'},
   ]
    return zfamily;
  }
}

export class SohrabiFmily extends FamilyListService {
  getFamily():FamilyModel[] {
    let sfamily:FamilyModel[];
    sfamily=[
      {id: 1, name: 'maman'},
      {id: 2, name: 'khale'},
      {id: 3, name: 'Maha'},
      {id: 4, name: 'dayi'},
    ]
    return sfamily;
  }
}
