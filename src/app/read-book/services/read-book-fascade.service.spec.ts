import { TestBed } from '@angular/core/testing';

import { ReadBookFascadeService } from './read-book-fascade.service';

describe('ReadBookFascadeService', () => {
  let service: ReadBookFascadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadBookFascadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
