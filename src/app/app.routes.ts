import { Routes } from '@angular/router';
import { GymListComponent } from './features/gym/gym-list/gym-list.component';

export const routes: Routes = [
        {
            path:'home',
            component:GymListComponent
        },
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/features.module').then((m) => m.FeaturesModule),
          },
    
        ],
      },
];
