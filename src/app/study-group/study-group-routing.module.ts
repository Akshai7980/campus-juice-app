import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyGroupPage } from './study-group.page';

const routes: Routes = [
  {
    path: '',
    component: StudyGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyGroupPageRoutingModule {}
