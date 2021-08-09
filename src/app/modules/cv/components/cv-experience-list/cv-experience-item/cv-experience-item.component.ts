import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ExpEduItems } from '../../../interface/cvdata';

@Component({
  selector: 'app-cv-experience-item',
  templateUrl: './cv-experience-item.component.html',
  styleUrls: ['./cv-experience-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvExperienceItemComponent implements OnInit {
  @Input() item: ExpEduItems = {} as ExpEduItems;

  constructor() { }

  ngOnInit(): void {
  }

}
