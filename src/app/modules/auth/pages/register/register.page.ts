import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PhoneNumberValidator } from "../../validators/phonenumber.validator";
import { AuthService } from "src/app/shared/services/auth.service";
import { IUser } from "src/app/shared/interfaces/user.interface";

@Component({
    templateUrl: './register.page.html'
})
export class RegisterPage implements OnInit {

    myForm = new FormGroup({
        name: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        number: new FormControl('', [Validators.required, PhoneNumberValidator()]),
    });

    constructor(
        public authService: AuthService,
    ) { }

    ngOnInit(): void {
        setInterval(() => {
        console.log('form', this.myForm.controls.number)
        },5000)
    }

    saveUser() {
        const user: IUser = {
            name: String(this.myForm.controls.name.value),
            lastname: String(this.myForm.controls.lastname.value),
            email: String(this.myForm.controls.email.value),
            password: String(this.myForm.controls.password.value),
            phonnumber: String(this.myForm.controls.number.value),
        }

        this.authService.saveUser(user)
    }


}
