import { TestBed, inject } from '@angular/core/testing';

import { PostAccountOptionsService } from './post-account-options.service';

describe('PostAccountOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostAccountOptionsService]
    });
  });

  it('should be created', inject([PostAccountOptionsService], (service: PostAccountOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
