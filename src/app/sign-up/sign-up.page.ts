/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ControllerService } from '../services/controller.service';
import { AjaxService } from '../services/ajax.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;
  campusList: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private control: ControllerService,
    private ajax: AjaxService,
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      email: [null, [Validators.required, Validators.email, Validators.minLength(12)]],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      university: [null, Validators.required],
      campus: [null, Validators.required],
      device_token: ['cd347902-d2b3-11eb-b8bc-0242ac130003'],
      device_type: ['Android']
    });
    this.getCampus();
    this.control.menu.swipeGesture(false);
  }

  getCampus() {
    this.ajax.postRequestWithoutParam('list_campus').then((res: any) => {
      console.log('Campus List Res:',res);
      this.campusList = res.details;
    }).catch ((err) => {
      console.log('Error:',err);
    });
  }

  signUp() {
    if (!this.signUpForm.valid) {
      const head = 'Failed!';
      const msg = ' <strong> Sign Up </strong> details are not valid. Please provide valid details and then click <strong> Sign Up  Button</strong>';
      this.control.presentAlert(head, msg);
      console.log('Form Invalid');
      console.log('signUpForm:',this.signUpForm.value);
      return false;
    } else {
      const loadingMsg = 'Please wait ...';
      const loadingTime = 3000;
      this.control.presentLoading(loadingMsg, loadingTime);
      console.log('signUpForm:',this.signUpForm.value);
      this.ajax.postMethod('register',this.signUpForm.value).then((res: any) => {
        console.log('signUp Res:',res);
        if (res.status === true) {
          const toastMsg = this.signUpForm.value.fullName + ' Campus Juice user registration successful, <strong>Sign In</strong> to continue to the app';
          const toastTime = 3000;
          this.control.presentToast(toastMsg, toastTime);
          this.signUpForm.reset();
          this.control.router.navigate(['sign-in']);
        } else {
          const alertHead = 'Failed!';
          const alertMsg = res.message;
          this.control.presentAlert(alertHead, alertMsg);
          this.signUpForm.reset();
        }
      }).catch ((err) => {
        console.log('Error:',err);
      });

    }

  }

}
