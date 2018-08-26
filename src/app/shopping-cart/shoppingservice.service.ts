import { Injectable, EventEmitter } from '@angular/core';
import { itemList } from '../ItemModel';
import { ItemService } from '../item/item.service';
import { CartItem } from '../CartDisplayModel';

@Injectable({
  providedIn: 'root'
})
export class ShoppingserviceService {

  TotalAmount: number;
  item: itemList[];
  CartList: CartItem[] = [];
  cart: Number;

  TotalBill = 0.0;

  public getCartItems() {
    console.log(this.CartList);
    return this.CartList;
  }

  public AddItem(item) {
    if (this.CartList.find(x => x.item_name === item.item_name)) {

      alert('The item already exist in your cart you can edit the quantity in ShoppingCart');
      return;
    }
   
    const obj: CartItem = {
      item_name: item.item_name,
      Grams: item.grams,
      KiloGrams: item.kilograms,
      Quantity: ((item.Grams / 1000) + (item.KiloGrams)).toFixed(2),
      item_price: item.item_price,
      total: parseFloat((item.item_price * (item.KiloGrams + (item.Grams / 1000))).toFixed(2)),
      TotalAmount: this.TotalBill
    };
    this.TotalBill += parseFloat(obj.total.toFixed(2));
    this.CartList.push(obj);
  }
  totalBill() {

    return parseFloat(this.TotalBill.toFixed(2));

  }


}
