import { Injectable, OnInit } from "@angular/core";
import { IUser } from "../interfaces/user.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    user!: IUser

    contadorObservable!: Observable<number>
    count = 0
    init(): void {

        this.contadorObservable = new Observable<number>((observer) => {
            
            const interval = setInterval(() => {
                observer.next(this.count)
                this.count++
            }, 1000)


            return () => {
                console.log('unsubscribe');

                clearInterval(interval)
            }
        })  
    }



    saveUser(user: IUser): void {
        this.user = user
    }

    login(email: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'jose') {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }, 5000)
        })
        
    }
    
}