import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class CanActiveGuard implements CanActivate {
    constructor(
        public router: Router
    ) { }

    canActivate(): boolean {
        if(true) {
            console.log('puede acceder');
            return true;
        } else {
            console.log('imposible acceder');
            this.router.navigate(['/auth']);
            return false;
        }
    }

    
}