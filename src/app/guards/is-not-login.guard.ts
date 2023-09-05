import {Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IsNotLoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // console.log("router 1",route);
    if(this.authService.isLoggedOut() === false && route.url[0].path === 'login')
    {
      this.router.navigateByUrl('/home');
    }
    return this.authService.isLoggedOut();
  }

}
