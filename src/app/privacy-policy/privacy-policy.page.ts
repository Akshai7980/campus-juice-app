/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller.service';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  segment: string;
  privacyPolicy: any = [];
  urlName: any;

  constructor(
    public control: ControllerService,
    ) {
    this.control.route.queryParams.subscribe(params => {
      if (this.control.router.getCurrentNavigation().extras.state) {
        this.urlName = this.control.router.getCurrentNavigation().extras.state.name;
        console.log('url:',this.urlName);
      }
    });
  }

  ngOnInit() {
    if (this.urlName === 'Privacy') {
      this.segment = 'privacy';
    } else if (this.urlName === 'Terms') {
      this.segment = 'terms';
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.privacyPolicy = [
      {
        date: "January 29, 2021",
        para1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ];
  }

}
