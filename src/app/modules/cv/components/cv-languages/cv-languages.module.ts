import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvLanguagesComponent } from './cv-languages.component';
import { TitleModule } from '../../../../shared/title/title.module';

@NgModule({
  declarations: [
    CvLanguagesComponent
  ],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [
    CvLanguagesComponent
  ]
})
export class CvLanguagesModule { }
