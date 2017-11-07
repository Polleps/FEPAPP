import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhardwareComponent } from './addhardware.component';

describe('AddhardwareComponent', () => {
  let component: AddhardwareComponent;
  let fixture: ComponentFixture<AddhardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
