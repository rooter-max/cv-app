import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvExperienceItemComponent } from './cv-experience-item.component';

describe('CvExperienceItemComponent', () => {
  let component: CvExperienceItemComponent;
  let fixture: ComponentFixture<CvExperienceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvExperienceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvExperienceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
