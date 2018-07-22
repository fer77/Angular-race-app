import { TestBed, inject } from '@angular/core/testing';

import { GithubFollowersService } from './github-followers.service';

describe('GithubFollowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubFollowersService]
    });
  });

  it('should ...', inject([GithubFollowersService], (service: GithubFollowersService) => {
    expect(service).toBeTruthy();
  }));
});
