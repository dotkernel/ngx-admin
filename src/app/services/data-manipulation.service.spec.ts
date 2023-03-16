import { TestBed } from '@angular/core/testing';

import { DataManipulationService } from './data-manipulation.service';

describe('DataManipulationService', () => {
  let service: DataManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
