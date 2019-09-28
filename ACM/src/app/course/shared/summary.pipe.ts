import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, showMore : boolean): any {
    if(!showMore)
    {
      return value.slice(0, 20)+'....';
    }
    return value;
  }

}
