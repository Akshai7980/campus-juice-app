/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AjaxService } from '../services/ajax.service';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.page.html',
  styleUrls: ['./news-letter.page.scss'],
})
export class NewsLetterPage implements OnInit {
  newsLetterForm: FormGroup;
  userDetails: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private control: ControllerService,
    private ajax: AjaxService,
  ) {
    this.control.route.queryParams.subscribe(params => {
      if (this.control.router.getCurrentNavigation().extras.state) {
        this.userDetails = this.control.router.getCurrentNavigation().extras.state.user;
        console.log('userDetails:',this.userDetails);
      }
    });
   }

  ngOnInit() {
    this.newsLetterForm = this.formBuilder.group({
      student_id: [this.userDetails.id],
      student_email: [null, [Validators.required, Validators.email, Validators.minLength(12)]],
      date_birth: [null]
    });
  }

  doSomething() {
    this.newsLetterForm.value.date_birth = this.newsLetterForm.value.date_birth.split('T')[0];
     console.log(this.newsLetterForm.value.date_birth);
 }

  newsLetter() {
    if (!this.newsLetterForm.valid) {
      const head = 'Failed!';
      const msg = ' <strong> News Letter </strong> details are not valid. Please provide valid details and then click <strong> JOIN THE CLUB Button</strong>';
      this.control.presentAlert(head, msg);
      console.log('Form Invalid');
      console.log('newsLetterForm:',this.newsLetterForm.value);
    } else {
      const loadingMsg = 'Please wait ...';
      const loadingTime = 2000;
      this.control.presentLoading(loadingMsg, loadingTime);
      console.log('newsLetterForm:',this.newsLetterForm.value);
      this.ajax.postMethod('add_newsletter',this.newsLetterForm.value).then((res: any) => {
        console.log('News Letter Res:',res);
        if (res.status === true) {
          const toastMsg = 'News Letter Send Successful.';
          const toastTime = 3000;
          this.control.presentToast(toastMsg, toastTime);
          this.newsLetterForm.reset();
        }
      }).catch ((err) => {
        console.log('Error:',err);
      });
    }
  }

}
