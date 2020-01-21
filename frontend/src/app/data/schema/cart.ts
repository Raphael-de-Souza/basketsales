import { Product } from './product';
import { User } from './User';

export class Cart {
    id: string;
    user: User;
    dateTime: Date;
    cartItems: [{product: Product, quantity: number}];
    isExpired: boolean;
}
