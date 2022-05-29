import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustAskACelebrityPage } from './just-ask-a-celebrity.page';

const routes: Routes = [
  {
    path: '',
    component: JustAskACelebrityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustAskACelebrityPageRoutingModule {}
