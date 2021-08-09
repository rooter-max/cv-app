import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvContactMeComponent } from './cv-contact-me.component';

describe('CvContactMeComponent', () => {
  let component: CvContactMeComponent;
  let fixture: ComponentFixture<CvContactMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvContactMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
