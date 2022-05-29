import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickCashPage } from './quick-cash.page';

const routes: Routes = [
  {
    path: '',
    component: QuickCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickCashPageRoutingModule {}
