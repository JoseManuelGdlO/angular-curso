import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function PhoneNumberValidator (): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
        const phonenumber = control.value
        let phonenumberinvalid618 = false
        let phonenumberinvalid777 = false
        if (!phonenumber.toString().includes('618')) {
            phonenumberinvalid618 = true    
        }

        if (!phonenumber.toString().includes('777')) {
            phonenumberinvalid777 = true
        }

        if(phonenumberinvalid618 && phonenumberinvalid777) {
            return { phonenumberinvalid618, phonenumberinvalid777 }
        } else {
            return {}
        }


    }
 
    
}