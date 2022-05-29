import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostServicePage } from './post-service.page';

const routes: Routes = [
  {
    path: '',
    component: PostServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostServicePageRoutingModule {}
