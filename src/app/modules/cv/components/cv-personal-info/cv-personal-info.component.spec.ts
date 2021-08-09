import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPersonalInfoComponent } from './cv-personal-info.component';

describe('CvPersonalInfoComponent', () => {
  let component: CvPersonalInfoComponent;
  let fixture: ComponentFixture<CvPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvPersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
