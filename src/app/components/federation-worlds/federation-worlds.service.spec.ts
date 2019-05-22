import { TestBed } from '@angular/core/testing';

import { FederationWorldsService } from './federation-worlds.service';

describe('FederationWorldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FederationWorldsService = TestBed.get(FederationWorldsService);
    expect(service).toBeTruthy();
  });
});
