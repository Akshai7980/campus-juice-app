import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupWithYouTodayPageRoutingModule } from './sup-with-you-today-routing.module';

import { SupWithYouTodayPage } from './sup-with-you-today.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupWithYouTodayPageRoutingModule
  ],
  declarations: [SupWithYouTodayPage]
})
export class SupWithYouTodayPageModule {}
