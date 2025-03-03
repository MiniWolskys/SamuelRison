import { TestBed } from '@angular/core/testing';

import { CompactViewService } from './compact-view.service';
import { firstValueFrom } from 'rxjs';

describe('CompactViewService', () => {
    let service: CompactViewService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CompactViewService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have initial value of true', async () => {
        expect(await firstValueFrom(service.isCompactObservable())).toEqual(true);
    });

    it('setCompact should change value given by observable', async () => {
        service.setCompact(false);
        expect(await firstValueFrom(service.isCompactObservable())).toEqual(false);
    });
});
