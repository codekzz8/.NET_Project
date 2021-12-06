import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FormComponent } from '../form/form.component';
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'form', component: FormComponent }
];



@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
        CommonModule
    ],
    exports: [RouterModule]
})
export class RoutingModule { }
