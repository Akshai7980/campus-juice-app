import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportAbusePage } from './report-abuse.page';

const routes: Routes = [
  {
    path: '',
    component: ReportAbusePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportAbusePageRoutingModule {}
