import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    log(mensaje: string, type = 'debug') {
        if(environment.production) return;
        
        if (type ==='debug') console.log(mensaje);
    }
}