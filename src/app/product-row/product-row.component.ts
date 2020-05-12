import { Component, OnInit,Input,HostBinding } from '@angular/core';
import { Product } from '../product/product.model';
@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
@Input() product;
  constructor() { }

  ngOnInit(): void {
  }

}
