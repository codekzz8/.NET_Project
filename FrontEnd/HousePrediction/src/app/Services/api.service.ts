import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Subscription } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrls = {Predict: 'https://localhost:44324/api/Predict',
                       Authorize: 'https://localhost:44324/api/User'
    };
    private currentBearerToken: any = null;
    constructor(private http: HttpClient,
                private loginService: LoginService) { }

    public async GetPrediction(body: any) {
        if(this.currentBearerToken == null) {
            await this.Authenticate();
            let reqHeader = new HttpHeaders({ 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.currentBearerToken
            });
            return this.http.post(this.apiUrls.Predict, body, {headers: reqHeader});
        
        }
        let reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.currentBearerToken
        });
        return this.http.post(this.apiUrls.Predict, body, {headers: reqHeader});

    }
    private Authenticate(): Promise<void>{
        console.log('test');
        return new Promise((resolve, reject) => {
            if(this.loginService.ensureUserLoggedIn()) {
                let reqHeader = new HttpHeaders({ 
                    'Content-Type': 'application/json',
                });
                this.http.post(this.apiUrls.Authorize, JSON.stringify({IdToken: this.loginService.LoggedUser.value.idToken}), {headers: reqHeader}).subscribe( (data: any) => {
                    this.currentBearerToken = data.authToken;
                    resolve(this.currentBearerToken);
                });
            } else
                reject();
        });
    }
}
