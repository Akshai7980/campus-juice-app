import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostServicePageRoutingModule } from './post-service-routing.module';

import { PostServicePage } from './post-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostServicePageRoutingModule
  ],
  declarations: [PostServicePage]
})
export class PostServicePageModule {}
