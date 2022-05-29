/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { ControllerService } from './../services/controller.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AjaxService } from './../services/ajax.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  signinForm: FormGroup;
  isChecked = false;

  constructor(
    private formBuilder: FormBuilder,
    private control: ControllerService,
    private storage: StorageService,
    private ajax: AjaxService
  ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.minLength(12)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      device_token: [''],
      device_type: ['']
    });
    this.fetchCheckedUserDetails();
    this.control.menu.swipeGesture(false);
  }

  signIn() {
    if (!this.signinForm.valid) {
      const head = 'Failed!';
      const msg = ' <strong> Sign In </strong> details are not valid. Please provide valid details and then click <strong> Sign In  Button</strong>';
      this.control.presentAlert(head, msg);
      return false;
    } else {
      console.log('signinForm:',this.signinForm.value);
      this.ajax.postMethod('login',this.signinForm.value).then((res: any) => {
        console.log('Sign In Res:',res);
        if (res.status === true) {
          this.storage.setStorage('USER_DETAILS',res.user_details);
          const msg = this.signinForm.value.email + ' successfully logged in.';
          const time = 1000;
          this.control.presentLoading(msg, time);
          this.control.navCtrl.navigateRoot('tabs');
        } else {
        this.control.navCtrl.navigateRoot('sign-in');
        }
      }).catch((err) => {
        console.log('Error:',err);
      });

    }
  }

  onMyBooleanChange(){
    console.log('isChecked:',this.isChecked);
    if (this.signinForm.valid) {
      if(this.isChecked) {
        const msg = 'Your Email and Password is stored successfully.';
        const time = 2000;
        this.storage.setStorage('USER_DETAILS_CHECKED',this.signinForm.value).catch((err) => {
          console.log('Error',err);
          console.log('User Email and Password securely stored in device');
        });
        this.control.presentToast(msg, time);
      }
    } else {
      const msg = 'Please enter valid details and then click checkbox';
      const time = 2000;
      this.control.presentToast(msg, time);
    }
  }

  fetchCheckedUserDetails() {
    this.storage.storage.get('USER_DETAILS_CHECKED').then((val) => {
      console.log('Value',val);
      if(!val) {
        console.log('No User Details Stored');
      } else {
        const msg = 'We found your stored Email and Password, would you like to continue with that';
        const time = 2000;
        this.control.presentToast(msg, time);
      }
    }).catch((err) => {
      console.log('Error:',err);
    });
  }

  forgotPassword() {
    this.control.presentAlertPrompt();
  }

}
