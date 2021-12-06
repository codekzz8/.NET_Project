import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService
             ) { }

  public user: any;             
  ngOnInit(): void {
      this.loginService.LoggedUser.subscribe((user: any) => {
          console.log(user);
          this.user = user;
      });
          
  }

  logOut(): void {
      this.loginService.logOut();
      this.router.navigate(['']);
  }
}
