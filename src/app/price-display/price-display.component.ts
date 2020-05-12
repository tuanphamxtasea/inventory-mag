import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../product/product.model';
@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
@Input() product:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
