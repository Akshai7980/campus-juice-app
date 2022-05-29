import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreshGistPage } from './fresh-gist.page';

const routes: Routes = [
  {
    path: '',
    component: FreshGistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreshGistPageRoutingModule {}
