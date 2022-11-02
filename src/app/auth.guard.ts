import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MyServiceService } from './my-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private myservice: MyServiceService, private router: Router) {}
  canActivate() {
    if (this.myservice.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
