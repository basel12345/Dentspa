import { TestBed } from '@angular/core/testing';

import { HandelErrorService } from './handel-error.service';

describe('HandelErrorService', () => {
  let service: HandelErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandelErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
