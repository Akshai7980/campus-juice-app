import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CjHappeningsPage } from './cj-happenings.page';

const routes: Routes = [
  {
    path: '',
    component: CjHappeningsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CjHappeningsPageRoutingModule {}
