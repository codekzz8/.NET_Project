import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    private loggedUser: any = null;
    public LoggedUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public currentBearerToken: any = null;
  constructor(private socialAuthService: SocialAuthService,
              private router: Router) { 
    
                  
    var userDetails = sessionStorage.getItem('INET.loggedUser');
    if(userDetails != null) {
        try {
            this.loggedUser = JSON.parse(userDetails);
            this.LoggedUser.next(this.loggedUser);
        }catch(ex) {
            console.log(ex);
            console.log('bad user save');
        }

    }
    this.socialAuthService.authState.subscribe((user: any) => {
        if(user) {
            this.loggedUser = user;
            this.LoggedUser.next(this.loggedUser);
            sessionStorage.setItem('INET.loggedUser', JSON.stringify(user));
        }
    });

  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public ensureUserLoggedIn(): boolean {
      if(sessionStorage.getItem('INET.loggedUser') == null) {
          this.router.navigate(['']);
          return false;
      }
      return true;

  }

  logOut(): void {
    sessionStorage.removeItem('INET.loggedUser')
    try{
        this.socialAuthService.signOut();
    }catch(ex) {
    }
    this.loggedUser = null;
    this.LoggedUser.next(this.loggedUser);
  }
}
