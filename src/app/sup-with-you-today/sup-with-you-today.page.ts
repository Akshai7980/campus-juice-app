import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../services/ajax.service';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-sup-with-you-today',
  templateUrl: './sup-with-you-today.page.html',
  styleUrls: ['./sup-with-you-today.page.scss'],
})
export class SupWithYouTodayPage implements OnInit {
  userDetails: any = [];
  supToday: any;

  constructor(
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
    this.getSupWithYou();
  }

  getSupWithYou() {
    this.ajax.postRequestWithoutParam('list_suptoday').then((res: any) => {
      console.log('News Letter Res:',res);
      if (res.status === true) {
        this.supToday = res.details;
      }
    }).catch ((err) => {
      console.log('Error:',err);
    });
  }

}
