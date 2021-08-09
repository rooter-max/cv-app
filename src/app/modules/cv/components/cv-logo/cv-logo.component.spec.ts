import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLogoComponent } from './cv-logo.component';

describe('CvLogoComponent', () => {
  let component: CvLogoComponent;
  let fixture: ComponentFixture<CvLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
