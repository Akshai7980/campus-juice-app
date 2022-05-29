import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JustAskACelebrityPageRoutingModule } from './just-ask-a-celebrity-routing.module';

import { JustAskACelebrityPage } from './just-ask-a-celebrity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JustAskACelebrityPageRoutingModule
  ],
  declarations: [JustAskACelebrityPage]
})
export class JustAskACelebrityPageModule {}
