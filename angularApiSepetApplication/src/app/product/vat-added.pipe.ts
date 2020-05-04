import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  // vatPercentage ve vatDescription gelebilirde gelmeyebilirde
  transform(value: number, vatPercentage?: number, vatDescription?: string): string {
    // vatPercentage varsa
    if (vatPercentage) {
      vatPercentage = vatPercentage;
    } else {
      vatPercentage = 18;
    }
    return vatDescription + ' ' + (value + (value / 100 * vatPercentage));
  }

}
