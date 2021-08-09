import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvExperienceListComponent } from './cv-experience-list.component';

describe('CvExperienceListComponent', () => {
  let component: CvExperienceListComponent;
  let fixture: ComponentFixture<CvExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvExperienceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
