import { TestBed } from '@angular/core/testing';

import { InterventionrecordService } from './interventionrecord.service';

describe('InterventionrecordService', () => {
  let service: InterventionrecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionrecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
