import { TestBed } from '@angular/core/testing';

import { AngularProgressBarSmService } from './angular-progress-bar-sm.service';

describe('AngularProgressBarSmService', () => {
  let service: AngularProgressBarSmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularProgressBarSmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
