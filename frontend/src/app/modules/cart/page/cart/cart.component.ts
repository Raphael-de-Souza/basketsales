import { Component, OnInit } from '@angular/core';
import { Cart, User } from '@app/data/schema/cart'
import { AuthService } from '@app/core/service/auth.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	
	cart: Cart[] = [];
	displayedColumns: string[] = ['prodImage', 'prodName', 'prodDesc', 'prodPrice', 'prodQuant', 'prodTotPrice'];
	isLoadingResults = true;
	currentUser: User;
	totalCart = 0;
    constructor(private authService: AuthService) {
		this.authService.currentUser.subscribe(x => this.currentUser = x);
 	}

    ngOnInit(): void {
		this.cart = JSON.parse(localStorage.getItem("cart"));
		this.isLoadingResults = false;
		this.totalCalc();

    }

	addQuantity(index) {
		this.cart.cartItems[index].quantity = <HTMLInputElement>document.getElementById(index).valueAsNumber;
		localStorage.setItem("cart", JSON.stringify(this.cart));
		this.totalCalc();
		
	}
	
	checkOut(){
		
	}
	
	totalCalc(){
		this.totalCart = 0;
		for (let i in this.cart.cartItems){
			this.totalCart = this.totalCart + (this.cart.cartItems[i].quantity * this.cart.cartItems[i].product.prodPrice);
		}
	}
}
