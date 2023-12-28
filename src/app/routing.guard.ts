import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
  ){
    return true;
  }
  
}
