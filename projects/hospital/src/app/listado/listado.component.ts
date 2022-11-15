import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { map, Subscription } from "rxjs";
import { CovidService } from "../covid.service";
import { Covid } from "../shared/interfaces/covid.interface";

@Component({
    selector: 'hpl-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

    paises : Array<Covid> = [];
    suscript! : Subscription;

    constructor(private covidService: CovidService, private router : Router){
        this.suscript = this.covidService.getCovidData().subscribe(c  =>{
            this.paises = c.slice(0,20);
        }); 
    }

    salir (): void{
        this.router.navigate(['']);
    }

    ngOnDestroy(){
        this.suscript.unsubscribe();
        console.log("Desuscrito");
        
    }
}