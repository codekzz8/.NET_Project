import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { PredictionService } from './Services/prediction.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public form;
    public result;
    constructor(private fb: FormBuilder,
                private predictionService: PredictionService) {
        this.form = this.fb.group({
            id: ['7129300520'],
            date: ['20141013T000000'],
            bedrooms: ['3'],
            bathrooms: ['1'],
            sqft_living: ['1180'],
            sqft_lot: ['5650'],
            floors: ['1'],
            waterfront: ['0'],
            view: ['0'],
            condition: ['3'],
            grade: ['7'],
            sqft_above: ['1180'],
            sqft_basement: ['0'],
            yr_built: ['1955'],
            yr_renovated: ['0'],
            zipcode: ['98178'],
            lat: ['47.5112'],
            long: ['-122.257'],
            sqft_living15: ['1340'],
            sqft_lot15: ['5650']
          });
    }
    public OnSubmit() {
        console.log('test');
        this.predictionService.GetPrediction(this.form.value).subscribe((res) => {
            this.result = res;
        });
    }
}
