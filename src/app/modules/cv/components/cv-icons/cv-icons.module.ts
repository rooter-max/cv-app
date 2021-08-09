import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvIconsComponent } from './cv-icons.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    CvIconsComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    CvIconsComponent
  ]
})
export class CvIconsModule { }
