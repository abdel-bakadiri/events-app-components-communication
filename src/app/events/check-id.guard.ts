import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckIdGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const idString = next.paramMap.get('id');
    const id = Number(idString);
    if (isNaN(id) || id === 0) {
      if (isNaN(id)) alert(`the id ${idString} is not a number`);
      if (id === 0) alert(`the id equal to zero`);
      this.router.navigate(['/events']);
      return false;
    }
    return true;
  }
}
