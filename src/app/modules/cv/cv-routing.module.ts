import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv.component';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
    children: [
      {
        path: 'about',
        loadChildren: () =>
          import('../about-cv/about-cv.module').then(({ AboutCvModule }) => AboutCvModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule {}
