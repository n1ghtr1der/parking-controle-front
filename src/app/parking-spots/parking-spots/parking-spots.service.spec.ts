import { TestBed } from '@angular/core/testing';

import { ParkingSpotsService } from '../parking-spots.service';

describe('ParkingSpotsService', () => {
  let service: ParkingSpotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingSpotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
