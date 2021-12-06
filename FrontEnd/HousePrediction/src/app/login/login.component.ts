import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  socialUser: SocialUser;
  isLoggedin: boolean = false;  
  
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
    
    this.loginService.LoggedUser.subscribe((user) => {
        if(user) {
          this.socialUser = user;
          this.isLoggedin = (user != null);
          this.router.navigate(['/form']);
        }
    });
  }

  loginWithGoogle(): void {
      this.loginService.loginWithGoogle();
  }

  logOut(): void {
      this.loginService.logOut();
  }

}
