import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    log(mensaje: string, type = 'debug') {
        if (type ==='debug') console.log(mensaje);
    }
}