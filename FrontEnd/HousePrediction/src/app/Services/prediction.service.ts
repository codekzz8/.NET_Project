import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private apiService: ApiService) { }
  public GetPrediction(request) {
      return this.apiService.GetPrediction(request);
  }
}
