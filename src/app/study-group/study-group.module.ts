import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyGroupPageRoutingModule } from './study-group-routing.module';

import { StudyGroupPage } from './study-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyGroupPageRoutingModule
  ],
  declarations: [StudyGroupPage]
})
export class StudyGroupPageModule {}
