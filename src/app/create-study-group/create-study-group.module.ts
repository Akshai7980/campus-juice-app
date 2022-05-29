import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateStudyGroupPageRoutingModule } from './create-study-group-routing.module';

import { CreateStudyGroupPage } from './create-study-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateStudyGroupPageRoutingModule
  ],
  declarations: [CreateStudyGroupPage]
})
export class CreateStudyGroupPageModule {}
