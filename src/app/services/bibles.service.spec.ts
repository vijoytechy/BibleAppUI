import { TestBed } from '@angular/core/testing';

import { BiblesService } from './bibles.service';

describe('BiblesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiblesService = TestBed.get(BiblesService);
    expect(service).toBeTruthy();
  });
});
