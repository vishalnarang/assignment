import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { constants } from 'src/constants/constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public signupForm: any = FormGroup;
  public step: number = 0;
  public isStepCompleted: boolean = false;
  public amountOfPractices: any;
  public step2Form: any = FormGroup;

  constructor(public formBuilder: FormBuilder,
    public commonService: CommonService,
    public router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      organizationName: [''],
      email: ['', [Validators.required, Validators.pattern(constants.emailPattern)]],
      phoneNumber: ['', [Validators.required]],
    })

    this.step2Form = this.formBuilder.group({
      amountOfPractices: ['', [Validators.required]],
      itemsNameList: this.formBuilder.array([])
    });
  }

  gotoNext() {
    if (this.signupForm.invalid) {
      return this.commonService.validateAllFormFields(this.signupForm);
    }
    else {
      this.step = 1;
      this.isStepCompleted = true;
    }
  }

  addOptionsRow() {
    const control = this.step2Form.controls["itemsNameList"] as FormArray;
    control.push(this.preDefineField());
    setTimeout(_ => {
      control.controls[control.length - 1].markAsDirty();
    }, 0);
    return control;
  }

  preDefineField() {
    return this.formBuilder.group({
      'name': ['', Validators.required]
    })
  }

  increment() {
    let value = this.step2Form.controls.amountOfPractices.value;
    value = value ? (parseInt(value) + 1) : 1;
    this.step2Form.controls.amountOfPractices.setValue(value);
    this.addOptionsRow();
  }

  decrement() {
    let value = this.step2Form.controls.amountOfPractices.value;
    value = parseInt(value) - 1;
    this.step2Form.controls.amountOfPractices.setValue(value);
    const control = this.step2Form.controls["itemsNameList"] as FormArray;
    (this.step2Form.controls["itemsNameList"] as FormArray).removeAt(control.length - 1);
  }

  submit() {
    if (!this.step2Form.controls.itemsNameList.valid) {
      this.step2Form.updateValueAndValidity();
      return this.commonService.validateAllFormFields(this.step2Form.controls.itemsNameList);
    }
    if(this.step2Form.invalid){
      return this.commonService.validateAllFormFields(this.step2Form);
    }
    else{
      this.router.navigate(['/home']);
    }
  }

}
