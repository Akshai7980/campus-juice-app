/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-cash',
  templateUrl: './quick-cash.page.html',
  styleUrls: ['./quick-cash.page.scss'],
})
export class QuickCashPage implements OnInit {

  jobs: any = [];

  constructor() { }

  ngOnInit() {
    this.jobs = [
      {
        job_title: 'I need a hair do',
        job_description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        job_location: 'Sydney',
        posted_user: '../../assets/image/sampleimages/img1.jpeg',
        job_posted_by: 'Gemma Areteone',
        job_viewed: '4',
        posted_time : '3h ago'
      }
    ];
  }

}
