import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProfilesItems } from '../../interface/cvdata';

@Component({
  selector: 'app-cv-contact-me',
  templateUrl: './cv-contact-me.component.html',
  styleUrls: ['./cv-contact-me.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvContactMeComponent implements OnInit {
  @Input() linkedin: ProfilesItems = {} as ProfilesItems;
  @Input() email = '';
  hideEmail = '';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Simple hide email from spam bots
   */
  onShowEmail() {
    this.hideEmail = this.email;
  }

}
