import { TestBed } from '@angular/core/testing';

import { CompactViewService } from './compact-view.service';

describe('CompactViewService', () => {
    let service: CompactViewService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CompactViewService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have initial value of true', () => {
        service.isCompactObservable().subscribe(value => {
            expect(value).toEqual(true);
        });
    });
});
