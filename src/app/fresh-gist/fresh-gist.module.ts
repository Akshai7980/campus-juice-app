import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreshGistPageRoutingModule } from './fresh-gist-routing.module';

import { FreshGistPage } from './fresh-gist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreshGistPageRoutingModule
  ],
  declarations: [FreshGistPage]
})
export class FreshGistPageModule {}
