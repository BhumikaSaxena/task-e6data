import { Component, OnInit, Input } from '@angular/core';
import { itemList } from '../../ItemModel';

import { ShoppingserviceService } from '../../shopping-cart/shoppingservice.service';
import { CartItem } from '../../CartDisplayModel';
import { AuthorService } from '../../Auth/authorService';
@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit {

  @Input() item: itemList;
  shoppingList: itemList;
  CartList: CartItem[];
  IsPressed: boolean;


  constructor(private ShoppingService: ShoppingserviceService, private authService: AuthorService) {

  }

  ngOnInit() {

  }
  OnClickCart(Item: any) {
    if (Item.Grams === undefined && Item.KiloGrams !== null) {
      Item.Grams = 0 ;
        }
    if (Item.KiloGrams === undefined && Item.Grams !== null) {
      Item.KiloGrams = 0 ;
    }
    if (Item.Grams === 0 && Item.KiloGrams === 0) {
      alert('Enter some amount');
      return;
    }

    if (Item.Grams < 0 && Item.KiloGrams < 0) {
      alert('Enter some valid amount');
      return;
    }
    if (Item.Grams < 0 || Item.KiloGrams < 0) {
      alert('Enter some valid amount');
      return;
    }
    if (Item.Grams === undefined  && Item.KiloGrams === undefined ) {
      alert('Enter some amount');
      return;
    }
      this.ShoppingService.AddItem(Item);
    }
  }

