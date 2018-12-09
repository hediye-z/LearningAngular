import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name:'jalali'
})
export class ConvertDatePipe implements PipeTransform{
  transform(value: string): string {
    let date = moment(value,'YYYY/MM/DD');
    return date.locale('fa').format('YYYY/M/D');
  }
}
