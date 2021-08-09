import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvIconsComponent } from './cv-icons.component';

describe('CvIconsComponent', () => {
  let component: CvIconsComponent;
  let fixture: ComponentFixture<CvIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
