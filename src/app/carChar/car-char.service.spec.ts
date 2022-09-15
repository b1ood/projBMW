import { TestBed } from '@angular/core/testing';

import { CarCharService } from './car-char.service';

describe('CarCharService', () => {
  let service: CarCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
