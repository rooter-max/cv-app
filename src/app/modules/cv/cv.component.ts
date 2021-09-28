import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CvService } from './services/cv.service';
import { CVData, ProfilesItem } from './interface/cvdata';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvComponent implements OnInit {
  cvData: CVData = {} as CVData;
  linkedin: ProfilesItem | undefined = {} as ProfilesItem;

  constructor(
    private cvService: CvService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.cvService.getCvData().subscribe((data: CVData) => {
      this.cvData = data;
      this.linkedin = data.social.items.find( (item) => item.title === 'Linkedin');
      this.cdr.detectChanges();
    });
  }

}
