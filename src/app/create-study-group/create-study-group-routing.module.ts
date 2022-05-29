import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStudyGroupPage } from './create-study-group.page';

const routes: Routes = [
  {
    path: '',
    component: CreateStudyGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateStudyGroupPageRoutingModule {}
