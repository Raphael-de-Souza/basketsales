import { Component, OnInit } from '@angular/core';
import { Product } from '@app/data/schema/product';
import { ProductService } from '@app/data/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data: Product[] = [];
  displayedColumns: string[] = ['prodImage', 'prodName', 'prodDesc', 'prodPrice', 'orderQuant'];
  isLoadingResults = true;
  cartTotal = 1;

  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
  this.productService.getProducts()
    .subscribe(products => {
      this.data = products;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
