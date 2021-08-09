import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-cv',
  templateUrl: './about-cv.component.html',
  styleUrls: ['./about-cv.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutCvComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onOverlayCLick() {
    this.router.navigate(['/']);
  }

}
