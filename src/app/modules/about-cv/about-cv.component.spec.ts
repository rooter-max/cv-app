import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCvComponent } from './about-cv.component';

describe('AboutCvComponent', () => {
  let component: AboutCvComponent;
  let fixture: ComponentFixture<AboutCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
