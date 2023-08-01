import { TestBed } from '@angular/core/testing';

import { ApiServiieService } from './api-serviie.service';

describe('ApiServiieService', () => {
  let service: ApiServiieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
