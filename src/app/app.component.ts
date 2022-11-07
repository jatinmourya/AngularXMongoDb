import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular X MongoDb';
  constructor(public myservice: MyServiceService, private router: Router) {}

  logOut() {
    this.myservice.isLoggedIn = false;
    location.reload();
    localStorage.clear();
  }
  ngOnInit() {
    console.log('APP COMPONENT LOADED');

    console.log('localstorage : ', localStorage['userDetailArray']);
    if (this.userDetailArray != '' || this.userDetailArray != undefined) {
      this.userDetailArray = JSON.parse(localStorage['userDetailArray']);
      console.log(this.userDetailArray);
      this.myservice.loginUser(this.userDetailArray).subscribe((res: any) => {
        console.log(res);
        if (res.response == true) {
          this.myservice.isLoggedIn = true;
          this.router.navigate(['/']);
        }
      });
    }
  }
  userDetailArray: any;
}

// import { SocialAuthService } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
// private authService: SocialAuthService 
// user: any;
// loggedIn: any;
// ngOnInit() {
//   this.authService.authState.subscribe((user) => {
//     this.user = user;
//     this.loggedIn = user != null;
//     console.log(this.user);
//   });
// }

// <asl-google-signin-button *ngIf="!user"></asl-google-signin-button>
// <div *ngIf="user">
//   welcome {{ user.name }}
//   <img src="{{ user.photoUrl }}" alt="" />
// </div>
