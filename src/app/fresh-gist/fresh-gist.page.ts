import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../services/ajax.service';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-fresh-gist',
  templateUrl: './fresh-gist.page.html',
  styleUrls: ['./fresh-gist.page.scss'],
})
export class FreshGistPage implements OnInit {
  userDetails: any = [];
  freshGist: any;
  skeleton: { skeleton: string}[];

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
    this.getFreshGist();
  }

  ionViewWillEnter() {
    this.skeleton =[ { skeleton: '', },{ skeleton: '', }, { skeleton: '', } ];
  }

  getFreshGist() {
    const params = {
      userid: this.userDetails.id
    };
    this.ajax.postMethod('list_gist',params).then((res: any) => {
      console.log('Fresh Gist Res:',res);
      if (res.status === true) {
        this.freshGist = res.details;
      }
    }).catch ((err) => {
      console.log('Error:',err);
    });
  }

}
