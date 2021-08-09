import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvSocialComponent } from './cv-social.component';
import { TitleModule } from '../../../../shared/title/title.module';

@NgModule({
  declarations: [
    CvSocialComponent
  ],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [
    CvSocialComponent
  ]
})
export class CvSocialModule { }
