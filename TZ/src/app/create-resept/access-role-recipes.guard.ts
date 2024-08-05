import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class AccessRoleRecipesGuard implements CanActivate {
  constructor(private service: ApiService, private router: Router) {}
  canActivate(

  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.service.role === 'gost') {
      return this.router.navigateByUrl('error');
    } else {
      return true;
    }
  }
}
