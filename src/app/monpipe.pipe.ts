import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monpipe'
})
export class MonpipePipe implements PipeTransform {

  transform(nom:string): string {
    return '**'+nom+'**';
  }


}
