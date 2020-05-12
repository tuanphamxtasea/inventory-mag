import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';
import{ Product} from '../product/product.model';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() productList:Product[];

@Output() onProductSelected:EventEmitter<Product>;

/**
 * @property currendtProduct - local state containing the currently selected 'Product'
 */
private currentProduct:Product;

  constructor() {
    this.onProductSelected = new EventEmitter();

   }

   clicked(product:Product):void{
     this.currentProduct =product;
     this.onProductSelected.emit(product);
   }

   isSelected(product:Product):boolean
   {
     if(!product||!this.currentProduct)
     {
       return false;
     }
     return product.sku==this.currentProduct.sku;
   }

  ngOnInit(): void {
  }

}
