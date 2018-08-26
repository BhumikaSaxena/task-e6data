
import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { itemList } from '../../ItemModel';
import { ItemService } from '../item.service';
import { AuthorService } from '../../Auth/authorService';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {

 @Input() item : itemList;
  constructor(private ItemLists : ItemService , private authService : AuthorService) { }

  ngOnInit() {
  
  }
  OnSelect()
  {
    this.ItemLists.itemSelected.emit(this.item);
  }
 
}
