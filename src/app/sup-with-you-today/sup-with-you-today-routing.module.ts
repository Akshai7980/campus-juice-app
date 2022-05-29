import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupWithYouTodayPage } from './sup-with-you-today.page';

const routes: Routes = [
  {
    path: '',
    component: SupWithYouTodayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupWithYouTodayPageRoutingModule {}
