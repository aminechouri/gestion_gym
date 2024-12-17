import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymListComponent } from './gym-list/gym-list.component';
import { GymAddComponent } from './gym-add/gym-add.component';

const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule { }
