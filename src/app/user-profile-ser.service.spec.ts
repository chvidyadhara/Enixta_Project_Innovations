import { TestBed } from '@angular/core/testing';

import { UserProfileSerService } from './user-profile-ser.service';

describe('UserProfileSerService', () => {
  let service: UserProfileSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
