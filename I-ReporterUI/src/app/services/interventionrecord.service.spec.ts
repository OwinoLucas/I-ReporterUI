import { TestBed } from '@angular/core/testing';

import { InterventionRecordService } from './interventionrecord.service';

describe('InterventionrecordService', () => {
  let service: InterventionRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
