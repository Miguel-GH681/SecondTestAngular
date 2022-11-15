import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class BaseComponent{
    subject: Subject<void> = new Subject<void>();

    ngOnDestroy(){
        this.subject.next();
        console.log('Se ha realizado la desuscripción');   
    }
}