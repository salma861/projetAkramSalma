import { TestBed } from '@angular/core/testing';

import { ParfumsService } from './parfums.service';

describe('ParfumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParfumsService = TestBed.get(ParfumsService);
    expect(service).toBeTruthy();
  });
});
