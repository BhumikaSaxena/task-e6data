import { Component, OnInit } from '@angular/core';
import { itemList } from '../ItemModel';
import { CartItem } from '../CartDisplayModel';
import { ShoppingserviceService } from './shoppingservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


  cartList: CartItem[];


  Bill: number;
  IsPressed: Boolean;
  EditBill: Boolean;
  Showbill: Boolean;
  afterRemoving: number = (this.shoppingService.totalBill());
  constructor(private shoppingService: ShoppingserviceService, private router: Router) {
  }

  ngOnInit() {
    this.cartList = this.shoppingService.getCartItems();
    this.EditBill = false;

    this.IsPressed = false;
    if (this.cartList.length === 0) {
      this.IsPressed = true;
    }
  }
  OnBack() {
    this.router.navigate(['/']);
  }

  RemoveItem(item, i) {
    if (window.confirm('Are you sure you want to delete')) {
      this.shoppingService.TotalBill = this.shoppingService.TotalBill - item.total;
      this.cartList.splice(i, 1);


      if (this.EditBill === true) {
        this.Bill = parseFloat(this.shoppingService.TotalBill.toFixed(2));
      }
    }


    if (this.cartList.length === 0) {
      this.IsPressed = true;
      this.Showbill = false;
    }


  }
  ClearList(i) {
    this.cartList.splice(i);
  }

  EditItem(item, i) {
    const quantity = parseFloat(prompt('Enter new Quantity'));
    if (isNaN(quantity)) {
      alert('enter valid amount');
      return;
    }
    this.cartList = this.shoppingService.getCartItems();
    if (quantity !== 0 && quantity > 0) {
      this.shoppingService.TotalBill = this.shoppingService.TotalBill - item.total ;
      item.Quantity = +quantity;
      item.total = item.Quantity * (item.item_price);
      this.shoppingService.TotalBill = this.shoppingService.TotalBill + item.total;
      this.Bill = parseFloat(this.shoppingService.TotalBill.toFixed(2));
      // tslint:disable-next-line:no-unused-expression
    } if (quantity === undefined || quantity === 0 && this.cartList.length === 1) {
      alert('enter some valid quantity!!');
      this.Showbill = false;
      this.IsPressed = true;
      this.shoppingService.TotalBill = this.shoppingService.TotalBill - item.total;
      this.cartList.splice(i, 1);
      if (this.EditBill === true) {
        this.Bill = parseFloat(this.shoppingService.TotalBill.toFixed(2));
      }
      return;
    }
    if (quantity === 0) {
      this.shoppingService.TotalBill = this.shoppingService.TotalBill - item.total;
      this.cartList.splice(i, 1);
      if (this.EditBill === true) {
        this.Bill = parseFloat(this.shoppingService.TotalBill.toFixed(2));
      }
    }
    if (quantity < 0 && this.cartList.length === 1) {
      alert('enter some valid quantity!!');

      return;
    }
    if (quantity < 0) {
      alert('enter some valid quantity!!');
     return;
    }
    // console.log(this.cartList);
    // console.log(Quant);
    // console.log(Price)
    // //this.shoppingService.EditCartItems(Quant,Price);

  }
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
  GetTotalAmount() {
    this.Showbill = true;
    this.Bill = this.shoppingService.totalBill();
    this.EditBill = true;
    return this.Bill;

  }
  /*GetTotalAmount()
  {
   this.cartLis = CartItem;
  this.Showbill= true;
  let totals = 0;
  t = this.shoppingService.getCartItems();
  for (var i = 0; i < t.length; i++) {

    totals += (t.item_price);
    alert(totals);
     return totals;
  }
  }*/
}





