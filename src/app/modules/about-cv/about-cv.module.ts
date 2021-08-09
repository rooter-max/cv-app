import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCvRoutingModule } from './about-cv-routing.module';
import { AboutCvComponent } from './about-cv.component';
import { TitleModule } from '../../shared/title/title.module';

@NgModule({
  declarations: [
    AboutCvComponent
  ],
  imports: [
    CommonModule,
    AboutCvRoutingModule,
    TitleModule
  ]
})
export class AboutCvModule { }
