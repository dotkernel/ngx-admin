import { TestBed } from '@angular/core/testing';

import { ApiWraperService } from './api-wraper.service';

describe('ApiWraperService', () => {
  let service: ApiWraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
