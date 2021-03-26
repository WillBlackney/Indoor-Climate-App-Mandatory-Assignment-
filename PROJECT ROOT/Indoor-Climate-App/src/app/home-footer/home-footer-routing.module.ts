import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFooterPage } from './home-footer.page';

const routes: Routes = [
  {
    path: '',
    component: HomeFooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFooterPageRoutingModule {}
