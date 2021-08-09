import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCvComponent } from './about-cv.component';

const routes: Routes = [
  {
    path: '',
    component: AboutCvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutCvRoutingModule { }
