import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public form: FormBuilder,
    public myservice: MyServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('LOGIN COMPONENT LOADED');
  }
  LoginFormDetail = this.form.group({
    username: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/[\w]{5,20}/),
      ]),
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+\-=`~[\]{};':",\.\/<>\?]).*$/
        ),
      ]),
    ],
    rememberme: false,
  });

  obj: any = {};
  sendLoginForm(form: any) {
    // console.log(form);
    this.myservice.loginUser(form).subscribe((res: object) => {
      var data = JSON.stringify(res);
      this.obj = JSON.parse(data);
      console.log(this.obj);
      this.myservice.isLoggedIn = this.obj.response;
      // console.log(this.myservice.isLoggedIn);
      if (this.myservice.isLoggedIn) {
        localStorage.setItem(
          'userDetailArray',
          JSON.stringify({
            username: this.obj.data.username,
            password: this.obj.data.password,
          })
        );
        this.router.navigate(['/']);
      }
    });
  }
}
