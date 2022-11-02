import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private router: Router,
    private form: FormBuilder,
    public myservice: MyServiceService
  ) {}
  ngOnInit(): void {
    console.log('SINGUP COMPONENT LOADED');
  }

  sendSignupDetails(form: any) {
    // console.log(form);
    this.myservice.postData(form).subscribe((res: any) => {
      console.log(res);
      if (res.response == true) {
        this.myservice.isLoggedIn = true;

        localStorage.setItem(
          'userDetailArray',
          JSON.stringify({
            username: res.data.username,
            password: res.data.password,
          })
        );
        this.router.navigate(['/']);
      }
    });
  }

  SignupDetailForm = this.form.group({
    name: [
      '',
      Validators.compose([Validators.required, Validators.pattern(/\w{3,20}/)]),
    ],

    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          /^[^0-9]\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
        ),
      ]),
    ],
    username: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]{5,20}/),
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
  });
}
