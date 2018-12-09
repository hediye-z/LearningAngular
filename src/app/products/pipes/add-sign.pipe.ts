import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'addSign'
})
  export class AddSignPipe implements PipeTransform{
    transform(value: string, sign: string): string {
      return value+sign;
    }

}
