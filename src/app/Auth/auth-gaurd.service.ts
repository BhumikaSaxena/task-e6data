import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthorService } from './authorService';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthorService , private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    return this.authService.isAuthenticated();
    

  }
}
