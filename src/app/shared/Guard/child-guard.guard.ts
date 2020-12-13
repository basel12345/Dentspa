import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../Storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ChildGuardGuard implements CanActivateChild {
   constructor(
    private service: LocalStorageService,
    private router: Router
    ) {
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.service.getToken() && this.service.getUser()) {
        return true;
      } else {
        this.router.navigate(['core']);
        return false;
      }
  }
}
