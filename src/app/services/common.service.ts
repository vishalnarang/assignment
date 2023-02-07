import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    public validateAllFormFields(form: FormGroup) {
        const keys = Object.keys(form.controls);
        keys.forEach((field: any) => {
            const control = form.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    _keyPressAlphaNumber(event: any) {
        const pattern = /^[0-9 ]*$/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar) && event.charCode != 0) {
            event.preventDefault();
        }
    }

}

