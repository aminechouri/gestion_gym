import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymAddComponent } from './gym/gym-add/gym-add.component';
import { GymListComponent } from './gym/gym-list/gym-list.component';

const routes: Routes = [
    {
      path:'add-gym',
      component:GymAddComponent
    },
    {
      path:'list-gym',
      component:GymListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
