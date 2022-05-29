import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LetsHangoutPage } from './lets-hangout.page';

const routes: Routes = [
  {
    path: '',
    component: LetsHangoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetsHangoutPageRoutingModule {}
