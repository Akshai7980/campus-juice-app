import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CjHappeningsPageRoutingModule } from './cj-happenings-routing.module';

import { CjHappeningsPage } from './cj-happenings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CjHappeningsPageRoutingModule
  ],
  declarations: [CjHappeningsPage]
})
export class CjHappeningsPageModule {}
