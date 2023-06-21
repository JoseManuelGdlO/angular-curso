import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(public httpClient: HttpClient) { }

    async getUsers() {
        const response: any = await this.httpClient.post('https://jsonplaceholder.typicode.com/users', {})
        return response.data
    }

}