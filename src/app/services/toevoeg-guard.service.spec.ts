import { TestBed, inject } from '@angular/core/testing';

import { ToevoegGuardService } from './toevoeg-guard.service';

describe('ToevoegGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToevoegGuardService]
    });
  });

  it('should be created', inject([ToevoegGuardService], (service: ToevoegGuardService) => {
    expect(service).toBeTruthy();
  }));
});
