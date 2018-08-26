import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { itemList } from '../ItemModel';
import { AuthorService } from '../Auth/authorService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers : [ItemService]
})
export class ItemComponent implements OnInit {
  LoadedFeature = 'Home';
  SelectedItem: itemList;
  constructor(private Item: ItemService , private authService: AuthorService) {

   }

  ngOnInit() {
    this.Item.itemSelected.
    subscribe((item: itemList) => {
      this.SelectedItem = item;
    });
  }
  OnNavigate(feature: string) {
  this.LoadedFeature = feature;
  }

}
