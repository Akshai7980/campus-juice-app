import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickCashPageRoutingModule } from './quick-cash-routing.module';

import { QuickCashPage } from './quick-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickCashPageRoutingModule
  ],
  declarations: [QuickCashPage]
})
export class QuickCashPageModule {}
