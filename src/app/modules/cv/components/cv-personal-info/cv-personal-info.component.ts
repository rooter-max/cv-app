import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Description } from '../../interface/cvdata';

@Component({
  selector: 'app-cv-personal-info',
  templateUrl: './cv-personal-info.component.html',
  styleUrls: ['./cv-personal-info.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvPersonalInfoComponent implements OnInit {
  @Input() description: Description = {} as Description;
  @Input() full_name = '';
  @Input() position = '';

  constructor() { }

  ngOnInit(): void {
  }

}
