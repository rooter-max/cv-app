import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ExpEdu } from '../../interface/cvdata';

@Component({
  selector: 'app-cv-experience-list',
  templateUrl: './cv-experience-list.component.html',
  styleUrls: ['./cv-experience-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvExperienceListComponent implements OnInit {
  @Input() experience: ExpEdu = {} as ExpEdu;
  constructor() { }

  ngOnInit(): void {
  }

}
