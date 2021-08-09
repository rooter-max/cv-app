import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Profiles } from '../../interface/cvdata';

@Component({
  selector: 'app-cv-social',
  templateUrl: './cv-social.component.html',
  styleUrls: ['./cv-social.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvSocialComponent implements OnInit {
  @Input() profiles: Profiles = {} as Profiles;

  constructor() { }

  ngOnInit(): void {
  }

}
