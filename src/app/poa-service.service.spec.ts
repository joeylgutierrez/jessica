import { TestBed, inject } from '@angular/core/testing';

import { PoaServiceService } from './poa-service.service';

describe('PoaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoaServiceService]
    });
  });

  it('should be created', inject([PoaServiceService], (service: PoaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
