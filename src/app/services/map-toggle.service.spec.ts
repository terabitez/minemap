import { TestBed } from '@angular/core/testing';

import { MapToggleService } from './map-toggle.service';

describe('MapToggleService', () => {
  let service: MapToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
