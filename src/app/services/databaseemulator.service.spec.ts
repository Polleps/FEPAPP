import { TestBed, inject } from '@angular/core/testing';

import { DatabaseemulatorService } from './databaseemulator.service';

describe('DatabaseemulatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseemulatorService]
    });
  });

  it('should be created', inject([DatabaseemulatorService], (service: DatabaseemulatorService) => {
    expect(service).toBeTruthy();
  }));
});
