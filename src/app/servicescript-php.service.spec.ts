import { TestBed } from '@angular/core/testing';

import { ServicescriptPHPService } from './servicescript-php.service';

describe('ServicescriptPHPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicescriptPHPService = TestBed.get(ServicescriptPHPService);
    expect(service).toBeTruthy();
  });
});
