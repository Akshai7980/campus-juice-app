/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StorageService } from './services/storage.service';
import { Platform , NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  userDetails: any = [];

  public appPages = [
    {
      title: 'About Us',
      url: '/about-us',
      name: '',
      img: '../assets/icon/1.png'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      name: '',
      img: '../assets/icon/2.png'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
      name: 'Privacy',
      img: '../assets/icon/3.png'
    },
    {
      title: 'Terms & Conditions',
      url: '/privacy-policy',
      name: 'Terms',
      img: '../assets/icon/4.png'
    },
    {
      title: 'Mission Statement',
      url: '/mission-statement',
      name: '',
      img: '../assets/icon/5.png'
    },
    {
      title: 'Report Abuse',
      url: '/report-abuse',
      name: '',
      img: '../assets/icon/6.png'
    },
    {
      title: 'Blog',
      url: '/blog',
      name: '',
      img: '../assets/icon/7.png'
    },
    {
      title: 'FAQs',
      url: '/faqs',
      name: '',
      img: '../assets/icon/8.png'
    },
    {
      title: 'Delete Account',
      url: '/delete-account',
      name: '',
      img: '../assets/icon/9.png'
    },
    {
      title: 'Log Out',
      url: '/logout',
      name: 'Logout',
      img: '../assets/icon/10.png'
    },
  ];
  userImg: any;

  constructor(
    private router: Router,
    private platform: Platform,
    private navCtrl: NavController,
    private StorageService: StorageService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkUserDetails();
    });
  }

  checkUserDetails() {
    this.StorageService.storage.get('USER_DETAILS').then((val) => {
      if(val) {
        console.log('val:',val);
        this.userDetails = val;
        if (this.userDetails?.profile_pic!=='') {
          this.userImg = this.userDetails.profile_pic;
        }
        this.navCtrl.navigateRoot('tabs');
      } else {
        this.navCtrl.navigateRoot('landing');
      }
    }).catch((err) => {
      console.log('Error:',err);
    });
  }

  openPage(i: any) {

    if (this.appPages[i].name==='Logout') {
      this.userLogout();
    } else {
      const route = this.appPages[i].url;
      const navigationExtras: NavigationExtras = {
        state: {
          name: this.appPages[i].name
        }
      };
      this.router.navigate([route],navigationExtras);
    }

  }

  userLogout() {
    this.StorageService.clearStorage();
    this.navCtrl.navigateRoot('landing');
  }
}

