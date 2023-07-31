import { TestBed } from '@angular/core/testing';

import { S12Service } from './s12.service';

describe('S12Service', () => {
  let service: S12Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S12Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
