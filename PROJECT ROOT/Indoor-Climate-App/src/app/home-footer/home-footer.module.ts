import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeFooterPageRoutingModule } from './home-footer-routing.module';

import { HomeFooterPage } from './home-footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeFooterPageRoutingModule
  ],
  declarations: [HomeFooterPage]
})
export class HomeFooterPageModule {}
