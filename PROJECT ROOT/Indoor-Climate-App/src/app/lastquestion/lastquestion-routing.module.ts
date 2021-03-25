import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastquestionPage } from './lastquestion.page';

const routes: Routes = [
  {
    path: '',
    component: LastquestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastquestionPageRoutingModule {}
