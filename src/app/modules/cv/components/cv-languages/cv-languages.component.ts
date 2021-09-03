import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, PLATFORM_ID } from '@angular/core';
import { Languages } from '../../interface/cvdata';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cv-languages',
  templateUrl: './cv-languages.component.html',
  styleUrls: ['./cv-languages.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvLanguagesComponent implements OnInit {
  @Input() languages: Languages = {} as Languages;
  isBrowser: boolean

  constructor(
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      document.addEventListener('mousemove', this.parallax);
    }
  }

  parallax(e: any) {
    document.querySelectorAll('.object').forEach( (move) => {

      const movingValue = move.getAttribute('data-value');
      if (movingValue) {
        // @ts-ignore
        const x: any = (e.clientX * movingValue) / 250;
        // @ts-ignore
        const y: any = (e.clientY * movingValue) / 250;

        // @ts-ignore
        move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
      }
    });
  }

}
