import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvSkillsComponent } from './cv-skills.component';
import { TitleModule } from '../../../../shared/title/title.module';

@NgModule({
  declarations: [
    CvSkillsComponent
  ],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [
    CvSkillsComponent
  ]
})
export class CvSkillsModule { }
