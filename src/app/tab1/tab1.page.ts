import { Component, OnInit} from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ControllerService } from '../services/controller.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  userDetails: any = [];
  userImg: any;

  constructor(
    private control: ControllerService,
    public storage: StorageService,
  ) {}

  ngOnInit() {
    this.getUserDetails();
    if (this.userDetails?.profile_pic!=='') {
      this.userImg = this.userDetails.profile_pic;
    }
  }

  gotoPage(page) {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.userDetails
      }
    };
    const p = page;
    this.control.router.navigate([p], navigationExtras);
  }

  getUserDetails() {
    this.storage.storage.get('USER_DETAILS').then((val) => {
      if (val) {
        this.userDetails = val;
        console.log('userDetails:',this.userDetails);
      }
    }).catch((err) => {
      console.log('Error:',err);
    });
  }

}
