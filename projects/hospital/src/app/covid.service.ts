import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Covid } from "./shared/interfaces/covid.interface";

@Injectable({
    providedIn: 'root'
})
export class CovidService{

    private endpoint:string = 'https://covid19.mathdro.id/api/confirmed';

    constructor(private httpClient : HttpClient){}

    getCovidData() : Observable<Covid[]>{
        return this.httpClient.get<Array<Covid>>(this.endpoint);
    }
}