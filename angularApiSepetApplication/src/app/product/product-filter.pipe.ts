import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from './product.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: ProductModel[], filterText: string): ProductModel[] {
    /* filterText varsa filterText'i küçük harfe çevir ve filterText'e ata yoksa null dön */
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    return filterText ? value.filter((p: ProductModel) => p.productName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
