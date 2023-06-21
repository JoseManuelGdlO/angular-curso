import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UnitFunctionsService {

    constructor(public httpClient: HttpClient) { }

    squareAsync(num: number): Observable<number> {
        return new Observable<number>((observer) => {
            setTimeout(() => {
                observer.next(num * num);
                observer.complete();
            }, 1000);
        });
    }

    fetchData(): Promise<string> {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('Data fetched successfully');
            }, 2000);
        });
    }
    

    asyncSum(a: number, b: number): Promise<number> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(a + b);
            }, 1000);
        });
    }

    getUserData(userId: number): Observable<any> {
        return new Observable((observer) => {
            setTimeout(() => {
                const userData = {
                    id: userId,
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                };
                observer.next(userData);
                observer.complete();
            }, 2000);
        });
    }

    fetchDataFromAPI(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.httpClient.get('https://api.example.com/data').subscribe(
                (response) => {
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }


}