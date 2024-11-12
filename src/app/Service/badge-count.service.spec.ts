import { TestBed } from '@angular/core/testing';

import { BadgeCountService } from './badge-count.service';

describe('BadgeCountService', () => {
  let service: BadgeCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgeCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
