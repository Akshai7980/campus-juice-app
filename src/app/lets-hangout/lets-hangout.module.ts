import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LetsHangoutPageRoutingModule } from './lets-hangout-routing.module';

import { LetsHangoutPage } from './lets-hangout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LetsHangoutPageRoutingModule
  ],
  declarations: [LetsHangoutPage]
})
export class LetsHangoutPageModule {}
