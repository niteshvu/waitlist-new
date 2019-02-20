import { TestBed, inject } from '@angular/core/testing';

import { PrsServiceService } from './prs-service.service';

describe('PrsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrsServiceService]
    });
  });

  it('should be created', inject([PrsServiceService], (service: PrsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
