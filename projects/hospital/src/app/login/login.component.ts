import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'hpl-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    constructor(private router : Router){}
    
    showListado(){
        this.router.navigate(['listado'])
    }
}