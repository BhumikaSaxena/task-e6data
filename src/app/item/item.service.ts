import { Injectable, EventEmitter } from '@angular/core';
import { itemList } from '../ItemModel';
import { ShoppingserviceService } from '../shopping-cart/shoppingservice.service';
import { AuthorService } from '../Auth/authorService';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemSelected = new EventEmitter<itemList>();
  item: itemList;

  private ShoppingListFruits: itemList[] =
    [
      new itemList('Orange', '20', 'https://5.imimg.com/data5/XN/GR/MY-3040698/mini-orange-fruit-500x500.png'),
      new itemList('Avacado', '50', 'https://draxe.com/wp-content/uploads/2014/05/Avocado_Background.jpg'),
      new itemList('Banana', '12', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/bananas-1512135191.jpg?resize=768:*'),
      new itemList('lychee', '70', 'https://i.ebayimg.com/images/g/KXkAAOSwLlJa8Hje/s-l300.jpg'),
      new itemList('Papaya', '20', 'https://humidgarden.com/wp-content/uploads/2016/10/how-to-ripen-papaya.png'),
      new itemList('Guava', '23', 'https://cmeimg-a.akamaihd.net/640/ppds/61abbe84-9578-4dd8-a116-a5451e2e0708.jpg'),
      new itemList('Watermelon', '30', 'https://thumbs.dreamstime.com/t/sliced-watermelon-25612609.jpg'),
      new itemList('Melon', '25', 'https://i0.wp.com/invorma.com/wp-content/uploads/2015/06/Charentais-Melon.jpg'),
      new itemList('Apple', '80', 'https://i.ndtvimg.com/i/2017-10/apple-benefits_620x350_51507721694.jpg'),
      // tslint:disable-next-line:max-line-length
      new itemList('Grapes', '40', 'https://greenblender.com/smoothies/wp-content/uploads/2017/08/The-Health-Benefits-of-Grapes-by-GreenBlender-937x540.png')
    ];
  private ShoppingListVegetables: itemList[] =
    [
      new itemList('Cabbage', '10', 'https://www.organicfacts.net/wp-content/uploads/2013/05/Cabbage11.jpg'),
      new itemList('LadyFinger', '25', 'http://goagroceries.com/wp-content/uploads/2015/07/Lady-finger.jpg'),
      new itemList('BellPepper', '20', 'http://naturallynourishing.com/wp-content/uploads/2013/06/Bell-Peppers.jpg'),
      // tslint:disable-next-line:max-line-length
      new itemList('Carrot', '20', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4IRHuWy10oEF_ZADwBtzKwLeyyu9hhix0684DxePoJTPrJ3H'),
      // tslint:disable-next-line:max-line-length
      new itemList('Cucumber', '15', 'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dw4d694a55/Images/Product%20Images/prod002129/prod002129.jpg?sw=322&sh=380&sm=fit'),
      // tslint:disable-next-line:max-line-length
      new itemList('Onion', '12', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyDK4jDAwtR9PsyIuXyEzaqVwRO9As4k05gLOJPc6K9STMa7K'),
      new itemList('Chilli Pepper', '22', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XVBJOQZAEIJMzaln_5xEtqPUJ2fQQDPMKoaDcP6Dty1RiEvb')
    ];
  constructor(private slService: ShoppingserviceService, private authService: AuthorService) {

  }
  getItemFruits() {
    return this.ShoppingListFruits.slice();
  }
  getItemVegetables() {



    return this.ShoppingListVegetables.slice();
  }

}




