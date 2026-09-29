import { Routes } from '@angular/router';

import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'map',
        loadComponent: () =>
          import('./pages/prospectivity-map/prospectivity-map')
            .then(m => m.ProspectivityMap)
      },
      {
        path: 'prediction',
        loadComponent: () =>
          import('./pages/sample-prediction/sample-prediction')
            .then(m => m.SamplePrediction)
      },
      {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'map'
      }
    ]
  }
];