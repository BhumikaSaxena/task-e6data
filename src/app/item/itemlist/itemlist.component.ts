import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { itemList } from '../../ItemModel';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  @Output() itemWasSelected = new EventEmitter<itemList>();
  Fruits: boolean;
  Vegetables: boolean;
  ShoppingListFruits: itemList[];
  ShoppingListVegetables: itemList[];

  constructor(private List: ItemService) {

    this.Fruits = false;
    this.Vegetables = false;
  }

  ngOnInit() {
    this.ShoppingListFruits = this.List.getItemFruits();
    this.ShoppingListVegetables = this.List.getItemVegetables();
  }
  OnClickFruits() {
    this.Fruits = true;
    this.Vegetables = false;
  }
  OnClickVegetables() {
    this.Vegetables = true;
    this.Fruits = false;
  }
}




