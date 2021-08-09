import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSocialComponent } from './cv-social.component';

describe('CvSocialComponent', () => {
  let component: CvSocialComponent;
  let fixture: ComponentFixture<CvSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
