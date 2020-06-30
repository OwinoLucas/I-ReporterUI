import { TestBed } from '@angular/core/testing';

import { FlagapiService } from './flagapi.service';

describe('FlagapiService', () => {
  let service: FlagapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
