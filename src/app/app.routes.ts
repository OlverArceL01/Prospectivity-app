import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { ProspectivityMap } from './pages/prospectivity-map/prospectivity-map';
import { SamplePrediction } from './pages/sample-prediction/sample-prediction';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'map',
        component: ProspectivityMap
      },
      {
        path: 'prediction',
        component: SamplePrediction
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