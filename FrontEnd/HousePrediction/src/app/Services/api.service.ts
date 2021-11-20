import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://localhost:44324/api/Predict';
    constructor(private http: HttpClient) { }

    public GetPrediction(body) {
        return this.http.post(this.apiUrl, body);
    }
}
