import { TestBed } from '@angular/core/testing';

import { ConfigModelService } from './config-model';

describe('ConfigModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigModelService = TestBed.get(ConfigModelService);
    expect(service).toBeTruthy();
  });
});
