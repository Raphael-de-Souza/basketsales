/**
Defines the properties of a cart, including their items whith is a vector of Products and their respective quantities.
*/

import { Product } from './product';
import { User } from './User';

export class Cart {
    id: string;
    user: User;
    dateTime: Date;
    cartItems: [{product: Product, quantity: number}];
    isExpired: boolean;
}
