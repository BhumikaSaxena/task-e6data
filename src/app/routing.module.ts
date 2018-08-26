import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemdetailComponent } from './item/itemdetail/itemdetail.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { AuthGuard } from './Auth/auth-gaurd.service';
export const APP_ROUTES =
        [
            { path: 'home', component: ItemComponent, canActivate: [AuthGuard] },
            { path: 'home', component: ItemdetailComponent, canActivate: [AuthGuard] },

            { path: '', component: HomeComponent },
            { path: 'cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
            {
                path: 'signup', component: SignUpComponent
            },
            {
                path: 'signin', component: SignInComponent
            }
        ];
@NgModule(
    {
        declarations: [
        ],
        imports: [RouterModule.forRoot(APP_ROUTES)],
        exports: [RouterModule]
    }
)
export class Route {
}
