import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportAbusePageRoutingModule } from './report-abuse-routing.module';

import { ReportAbusePage } from './report-abuse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportAbusePageRoutingModule
  ],
  declarations: [ReportAbusePage]
})
export class ReportAbusePageModule {}
