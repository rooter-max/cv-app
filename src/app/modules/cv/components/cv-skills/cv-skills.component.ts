import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Skills } from '../../interface/cvdata';

@Component({
  selector: 'app-cv-skills',
  templateUrl: './cv-skills.component.html',
  styleUrls: ['./cv-skills.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvSkillsComponent implements OnInit {
  @Input() skills: Skills = {} as Skills;

  constructor() { }

  ngOnInit(): void {
  }

}
