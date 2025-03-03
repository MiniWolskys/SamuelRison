import { TestBed } from '@angular/core/testing';

import { ExperienceFilterService } from './experience-filter.service';
import { firstValueFrom } from 'rxjs';

describe('ExperienceFilterService', () => {
    let service: ExperienceFilterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ExperienceFilterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('filter list should be empty to begin with', async () => {
        expect(await firstValueFrom(service.filtersObservable())).toEqual([]);
    });

    it('filter list should contains elements given to setFilter function', async () => {
        service.setFilters(['Test', 'Value']);
        expect(await firstValueFrom(service.filtersObservable())).toEqual(['Test', 'Value']);
    });

    it('filter list given by secondaryFilterEvent should be empty at init', async () => {
        expect(await firstValueFrom(service.secondaryEditEvent())).toEqual([]);
    });

    it('filter list given by secondaryFilterEvent should not be modified from setFilters', async () => {
        service.setFilters(['Test', 'Value']);
        expect(await firstValueFrom(service.secondaryEditEvent())).toEqual([]);
    });

    it('toggleFilter should add element to filter if not present', async () => {
        service.toggleFilter('Value');
        expect(await firstValueFrom(service.secondaryEditEvent())).toEqual(['Value']);
    });

    it('toggleFilter should remove element to filter if already present', async () => {
        service.setFilters(['Value']);
        service.toggleFilter('Value');
        expect(await firstValueFrom(service.secondaryEditEvent())).toEqual([]);
    });
});
