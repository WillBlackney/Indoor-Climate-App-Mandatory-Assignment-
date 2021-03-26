import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastquestionPageRoutingModule } from './lastquestion-routing.module';

import { LastquestionPage } from './lastquestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastquestionPageRoutingModule
  ],
  declarations: [LastquestionPage]
})
export class LastquestionPageModule {}
