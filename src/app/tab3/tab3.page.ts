import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  notificationDetails: any = [];

  constructor() {}

  ionViewWillEnter() {
    this.notificationDetails = [
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '0',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '1',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '1',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '0',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '1',
      },
      {
        title: 'Lorem Ipsum is simply dummy text of the',
        content: 'Lorem Ipsum is simply dummy text of the printing',
        date : 'Today, 11:40 am',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        seen_status: '1',
      },
    ];
  }

}
