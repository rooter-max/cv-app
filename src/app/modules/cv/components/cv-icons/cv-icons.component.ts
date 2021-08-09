import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-cv-icons',
  templateUrl: './cv-icons.component.html',
  styleUrls: ['./cv-icons.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvIconsComponent implements OnInit {
  @Input() icons = [];

  constructor() { }

  ngOnInit(): void {
  }

  identify(index: any, item: any) {
    return item;
  }

}
