import { TestBed, inject } from '@angular/core/testing';

import { AccountOptionsService } from './account-options.service';

describe('AccountOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountOptionsService]
    });
  });

  it('should be created', inject([AccountOptionsService], (service: AccountOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
