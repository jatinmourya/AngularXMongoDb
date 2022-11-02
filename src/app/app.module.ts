import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AppRoutingModule, RoutingComponentsArray } from './app-routing.module';

// import {
//   SocialLoginModule,
//   SocialAuthServiceConfig,
// } from '@abacritt/angularx-social-login';
// import {
//   GoogleLoginProvider,
//   FacebookLoginProvider,
// } from '@abacritt/angularx-social-login';
@NgModule({
  declarations: [AppComponent, RoutingComponentsArray],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    // SocialLoginModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '40046088579-vjllj2sjibj423bi3fre5gfvq2nr1is3.apps.googleusercontent.com'
    //         ),
    //       },
    //       {
    //         id: FacebookLoginProvider.PROVIDER_ID,
    //         provider: new FacebookLoginProvider(
    //           '40046088579-vjllj2sjibj423bi3fre5gfvq2nr1is3.apps.googleusercontent.com'
    //         ),
    //       },
    //     ],
    //     onError: (err) => {
    //       console.error(err);
    //     },
    //   } as SocialAuthServiceConfig,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
