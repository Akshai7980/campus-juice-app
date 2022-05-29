import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsLetterPageRoutingModule } from './news-letter-routing.module';

import { NewsLetterPage } from './news-letter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewsLetterPageRoutingModule
  ],
  declarations: [NewsLetterPage]
})
export class NewsLetterPageModule {}
