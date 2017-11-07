import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwarelistComponent } from './hardwarelist.component';

describe('HardwarelistComponent', () => {
  let component: HardwarelistComponent;
  let fixture: ComponentFixture<HardwarelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwarelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwarelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
