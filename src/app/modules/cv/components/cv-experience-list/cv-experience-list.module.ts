import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvExperienceListComponent } from './cv-experience-list.component';
import { CvExperienceItemComponent } from './cv-experience-item/cv-experience-item.component';
import { TitleModule } from '../../../../shared/title/title.module';

@NgModule({
  declarations: [
    CvExperienceListComponent,
    CvExperienceItemComponent
  ],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [
    CvExperienceListComponent
  ]
})
export class CvExperienceListModule { }
