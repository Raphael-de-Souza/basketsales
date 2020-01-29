import { Component, OnInit } from '@angular/core';
import { Product } from '@app/data/schema/product';
import { ProductService } from '@app/data/service/product.service';
import { Cart, User, CartItem } from '@app/data/schema'
import { AuthService } from '@app/core/service/auth.service'
import { UserService } from '@app/data/service/user.service'

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
  cart: Cart;
  userService: UserService;	
  user: User;
  cartItem: CartItem;

  constructor(private productService: ProductService, private authService: AuthService) { }
  ngOnInit() {
    this.getProducts();
	this.cart = new Cart();
	this.cartItem = new CartItem();
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

  add(product: Product){
	
	if (this.cart.user == null){
		this.cart.user = this.authService.currentUserValue;
		this.cart.dateTime = new Date();
	}
	
	let index = this.cart.cartItems.findIndex(cartItem => cartItem.product === product)
	 
	if (index != -1){
		this.cart.cartItems[index].quantity = this.cart.cartItems[index].quantity + 1; ;
	}else{	
		this.cartItem.product = product;
		this.cartItem.quantity = 1;	
		this.cart.cartItems.push(this.cartItem);
	}		
		this.cartItem = new CartItem();
		localStorage.setItem("cart",JSON.stringify(this.cart));
  }
}
