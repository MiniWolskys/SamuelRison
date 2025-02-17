import { TestBed } from '@angular/core/testing';

import { ExperienceFilterService } from './experience-filter.service';

describe('ExperienceFilterService', () => {
  let service: ExperienceFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
