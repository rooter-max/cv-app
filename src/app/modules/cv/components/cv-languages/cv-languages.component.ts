import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Languages } from '../../interface/cvdata';

@Component({
  selector: 'app-cv-languages',
  templateUrl: './cv-languages.component.html',
  styleUrls: ['./cv-languages.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvLanguagesComponent implements OnInit {
  @Input() languages: Languages = {} as Languages;

  constructor() {
  }

  ngOnInit(): void {
    document.addEventListener('mousemove', this.parallax);

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
