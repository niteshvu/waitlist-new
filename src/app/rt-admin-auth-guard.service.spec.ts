import { TestBed, inject } from '@angular/core/testing';

import { RtAdminAuthGuardService } from './rt-admin-auth-guard.service';

describe('RtAdminAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RtAdminAuthGuardService]
    });
  });

  it('should be created', inject([RtAdminAuthGuardService], (service: RtAdminAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
