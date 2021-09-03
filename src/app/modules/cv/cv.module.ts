import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { CvLogoModule } from './components/cv-logo/cv-logo.module';
import { CvRoutingModule } from './cv-routing.module';
import { CvExperienceListModule } from './components/cv-experience-list/cv-experience-list.module';
import { CvSkillsModule } from './components/cv-skills/cv-skills.module';
import { CvService } from './services/cv.service';
import { CvLanguagesModule } from './components/cv-languages/cv-languages.module';
import { CvPersonalInfoModule } from './components/cv-personal-info/cv-personal-info.module';
import { CvIconsModule } from './components/cv-icons/cv-icons.module';
import { CvSocialModule } from './components/cv-social/cv-social.module';
import { CvContactMeModule } from './components/cv-contact-me/cv-contact-me.module';

@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    CvLogoModule,
    CvExperienceListModule,
    CvSkillsModule,
    CvLanguagesModule,
    CvPersonalInfoModule,
    CvIconsModule,
    CvSocialModule,
    CvContactMeModule
  ],
  providers: [
    CvService
  ]
})
export class CvModule { }
