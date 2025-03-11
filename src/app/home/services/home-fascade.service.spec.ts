import { TestBed } from '@angular/core/testing';

import { HomeFascadeService } from './home-fascade.service';

describe('HomeFascadeService', () => {
  let service: HomeFascadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeFascadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
