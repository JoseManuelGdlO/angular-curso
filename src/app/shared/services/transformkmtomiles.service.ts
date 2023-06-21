import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ParseKMToMilesService {
    kilometers = 30
    miles = 0

    constructor() {
        this.convert();
    }

    convert() {
        this.miles  = this.kilometers * 0.621371;
    }

}