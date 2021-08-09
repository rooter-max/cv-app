import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cv-logo',
  templateUrl: './cv-logo.component.html',
  styleUrls: ['./cv-logo.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvLogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
