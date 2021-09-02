import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split(" ");
    let result = "";

    for (let v of values) {
      result += this.capitalize(v);
    }

    result = result.substr(0,result.length - 1 )  /* Note: Removendo ultimo espaco do final*/
    return result;
  }

  capitalize(value: string) {
    return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase() + " ";
  }

}
