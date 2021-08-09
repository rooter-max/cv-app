import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvContactMeComponent } from './cv-contact-me.component';
import { TitleModule } from '../../../../shared/title/title.module';

@NgModule({
  declarations: [
    CvContactMeComponent
  ],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [
    CvContactMeComponent
  ]
})
export class CvContactMeModule { }
