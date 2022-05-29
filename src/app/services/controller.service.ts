/* eslint-disable @typescript-eslint/quotes */
import { AjaxService } from './ajax.service';
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { ModalController, ToastController, Platform, NavController, AlertController, ActionSheetController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public menu: MenuController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public route: ActivatedRoute,
    public platform: Platform,
    public router: Router,
    private ajax: AjaxService,
  ) { }



  // ----- App's Action Sheet Controller -----
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
    // ----- App's Action Sheet Controller -----



    // ----- App's Alert Controller -----
  async presentAlert(head, msg) {
    const alert = await this.alertCtrl.create({
      header: head,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
      // ----- App's Alert Controller -----



      // ----- App's Toast Controller -----
      async presentToast(msg, time) {
        const toast = await this.toastCtrl.create({
          message: msg,
          duration: time
        });
        toast.present();
      }

      async presentToastWithOptions() {
        const toast = await this.toastCtrl.create({
          header: 'Toast header',
          message: 'Click to Close',
          position: 'top',
          buttons: [
            {
              side: 'start',
              icon: 'star',
              text: 'Favorite',
              handler: () => {
                console.log('Favorite clicked');
              }
            },
            {
              text: 'Done',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        await toast.present();

        const { role } = await toast.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      }
        // ----- App's Toast Controller -----



        // ----- App's Loader Controller -----
        async presentLoading(msg, time) {
          const loading = await this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: msg,
            duration: time
          });
          await loading.present();

          const { role, data } = await loading.onDidDismiss();
          console.log('Loading dismissed!');
        }
        // ----- App's Loader Controller -----


        async presentAlertPrompt() {
          const alert = await this.alertCtrl.create({
            header: 'Forgot Password !',
            inputs: [
              {
                name: 'email',
                type: 'email',
                placeholder: 'Enter your Email'
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Confirm Cancel');
                }
              }, {
                text: 'Ok',
                handler: (alertData) => {
                  console.log(alertData.email);
                  this.forgotPassword(alertData.email);
                }
              }
            ]
          });

          await alert.present();
        }

        forgotPassword(mail) {
          const loadingMsg = 'Please wait...';
          const loadingTime = 2000;
          this.presentLoading(loadingMsg, loadingTime);
          console.log('email:', mail);
          const params = {
            email: mail
          };
          this.ajax.postMethod('forget_password',params).then((res: any) => {
            console.log('Forgot Password Res:',res);
            if (res.status === true) {
              const alertHead = 'Success!';
              const alertMsg = 'Password Reset ' + res.message + ' to ' + mail ;
              this.presentAlert(alertHead, alertMsg);
            } else {
              const alertHead = 'Failed!';
              const alertMsg = res.message;
              this.presentAlert(alertHead, alertMsg);
            }
          }).catch ((err) => {
            console.log('Error:',err);
          });
        }

}
